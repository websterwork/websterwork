// app/layout.js
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate", // optional if you want Tailwind custom font family
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Websterwork - AI Powered Software Development",
  description:
    "Websterwork is a software development company that leverages AI to deliver innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syncopate.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body
        className={`${spaceGrotesk.className} antialiased h-full bg-white dark:bg-black`}
      >
        <div className="min-h-full flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
