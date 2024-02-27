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
  title:
    "SolarSmart - Redefining PV panel farms energy tracking and predictions",
  description:
    "We provide software solutions for tracking energy production and forecasting future production using machine learning algorithms for PV panel farms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} flex min-h-screen w-screen flex-col overflow-x-hidden font-inter text-secondary-900`}
      >
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
