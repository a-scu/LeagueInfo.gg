import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
