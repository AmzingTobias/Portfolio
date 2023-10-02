import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <NavBar />
        <div className="content w-full sm:w-11/12 md:w-10/12 lg:w-9/12 5xl:w-7/12 max-w-7xl flex mx-auto bg-zinc-800 bg-opacity-20 mt-6 rounded-sm p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
