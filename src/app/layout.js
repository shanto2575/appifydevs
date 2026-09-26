import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import AppToaster from "@/component/Ui/Toasters";
import Footer from "@/component/layout/Footer";
import ConditionalCTA from "@/component/layout/ConditionalCTA";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "AppifyDevs",
  description: "AI-powered conversations made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />

        <main className="flex-1">{children}</main>

        <ConditionalCTA />
        <Footer />
        <AppToaster />
      </body>
    </html>
  );
}