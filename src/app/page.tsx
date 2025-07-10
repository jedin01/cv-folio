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
    <main className="flex flex-col items-center justify-center h-dvh">
      <Terminal />

      <div className="grid grid-cols-2 w-full text-[12px]">
        <div className="h-fit w-fit flex flex-col gap-[10px] pt-[40px]">
          <h1 className="border-b-[1px] w-fit font-bold py-[5px]" >Desenvolvedor de Software</h1>
          <p className="w-[250px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut enim
            velit qui voluptatem labore omnis hic beatae ratione!.
          </p>
        </div>
        <div className="w-[300px] h-[300px] bg-white rounded-[5px] z-[2] relative top-[-150] left-[-120] overflow-hidden"></div>
      </div>
    </main>
  );
}
