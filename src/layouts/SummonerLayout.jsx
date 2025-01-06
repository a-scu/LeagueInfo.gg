import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function SummonerLayout({ children, region }) {
  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <div className="flex flex-col">
        <Header region={region} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
