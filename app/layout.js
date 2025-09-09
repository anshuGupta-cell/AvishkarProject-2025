import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import {
  ClerkProvider
} from "@clerk/nextjs"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "DisasterShield - NextGen Disaster Alerting",
  description: "A smart system that generates quick alerts for all types of disasters. It helps people stay safe by giving early warnings and timely notifications.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar/>
        <ToastContainer/>
        {children}
        
      </body>
    </html>
    </ClerkProvider>

  );
}
