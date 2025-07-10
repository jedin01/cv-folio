// app/page.tsx ou app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import { Terminal } from "../components/Terminal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <Terminal />
      <div className="w-[300px] h-[300px] bg-blue-400 rounded-[5px] z-[-2] relative top-[-150] left-[-120]">
        <img src="" alt="" />
      </div>
    </main>
  );
}
