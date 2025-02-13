// import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export const metadata = {
  title: {
    default: "Landrup Dans",
    template: "%s |Landrup Dans",
  },
  description: "Elsker du dans?",
};



export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
      className="bg-[#5E2E53]"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
