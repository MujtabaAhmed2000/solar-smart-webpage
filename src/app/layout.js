import "./globals.css";

import { Poppins, Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Deenar - Start Saving",
  description: "Gold investment app to start saving for a better future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} text-secondary-900 font-inter flex min-h-screen w-screen flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
