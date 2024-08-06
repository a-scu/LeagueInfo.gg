import { useStore } from "@nanostores/react";
import { $theme } from "@/js/store";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }) {
  const theme = useStore($theme);

  return (
    <div className={theme}>
      <div className="min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
