import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TDMD",
  description: "Tobias Dunn's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="content w-11/12 sm:w-9/12 flex mx-auto bg-zinc-800 bg-opacity-20 mt-6 rounded-sm p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
