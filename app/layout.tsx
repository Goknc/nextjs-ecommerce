import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";
import Navbar from './../components/Navbar';
import Footer from "@/components/Footer";
import { CartProvider } from './../context/CartContext';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
})

export const metadata: Metadata = {
  title: "Store Project",
  description: "Store Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
        </body>
    </html>
  );
}
