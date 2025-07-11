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
    <main className="flex flex-col items-center justify-center h-full">
      <div className="w-[200px] h-[200px] bg-white rounded-[5px] z-[-2] relative top-[100] left-[250] overflow-hidden shadow-2xs shadow-black">
        <img src="/images/jed.jpg" alt="epah, dps pense numa descricao mlhr" className="scale-[100%] relative top-[-70px]"/>
      </div>
      <Terminal />
    </main>
  );
}
