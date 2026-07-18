import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
