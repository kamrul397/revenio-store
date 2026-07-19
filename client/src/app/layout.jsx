import AuthProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// 1. Add the metadata configuration here
export const metadata = {
  title: "TechNova Store",
  description: "Modern asset marketplace",
  icons: {
    icon: "/favicon.svg", // Points directly to public/favicon.svg
  },
};

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
