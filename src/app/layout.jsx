import { Roboto } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "LeagueInfo.gg",
  description: "LeagueInfo.gg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
