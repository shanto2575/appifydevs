
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import { Toaster } from "react-hot-toast";
import AppToaster from "@/component/Ui/Toasters";
import Footer from "@/component/layout/Footer";
import CTASection from "@/component/home/CTASection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EchoGPT",
  description: "AI-powered conversations made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <CTASection/>
        <Footer/>
        <AppToaster/>
      </body>
    </html>
  );
}

