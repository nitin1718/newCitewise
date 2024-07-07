"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
    
      <head />
      <link rel="icon" href="../images/favicon.ico" sizes="any" />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <ToastContainer position="bottom-right"/>
          {children}
          <Footer/>
          {/* <ScrollToTop /> */}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
