require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://revenio-client.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ypjumbw.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("revenioDB");

    const productCollection = database.collection("products");

    app.get("/", (req, res) => {
      res.send("Revenio API Running");
    });
    // create a product
    app.post("/products", async (req, res) => {
      const product = req.body;

      const result = await productCollection.insertOne(product);

      res.send(result);
    });
    // get all products
    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();

      res.send(result);
    });
    // get a single product
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;

      const query = {
        _id: new ObjectId(id),
      };

      const result = await productCollection.findOne(query);

      res.send(result);
    });

    // update product
    app.put("/products/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedProduct = req.body;

        const filter = {
          _id: new ObjectId(id),
        };

        const updatedDoc = {
          $set: {
            title: updatedProduct.title,
            category: updatedProduct.category,
            price: Number(updatedProduct.price), // 👈 CRITICAL: Force it to be a Number for MongoDB Int32
            image: updatedProduct.image,
            description: updatedProduct.description,
          },
        };

        const result = await productCollection.updateOne(filter, updatedDoc);

        if (result.matchedCount === 0) {
          return res
            .status(404)
            .send({ error: "Product not found in database" });
        }

        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // delete product
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;

      const query = {
        _id: new ObjectId(id),
      };

      const result = await productCollection.deleteOne(query);

      res.send(result);
    });

    console.log("MongoDB Connected");
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
