import AuthProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <Navbar></Navbar> */}
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
          />
          {/* <Footer></Footer> */}
        </AuthProvider>
      </body>
    </html>
  );
}
