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
      <div className="w-fit">
        <section className="text-[12px] relative top-50">
          <div className="w-[300px]">
            <div className="border-b-2 w-fit">
              <p className="font-bold pb-2">Web Developer</p>
            </div>
            <p className="w-full font-light p-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              laborum maiores est? Libero, minus hic exercitationem quam odio ab
              dolore voluptatem alias in delectus labore facilis harum nisi
              ducimus accusantium.
            </p>
          </div>
        </section>
        <div className="w-[250px] h-[250px] bg-white rounded-[5px] z-[-2] relative top-[66] left-[350] overflow-hidden shadow-2xs shadow-black"></div>
        <Terminal />
      </div>
    </main>
  );
}
