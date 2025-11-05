import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
