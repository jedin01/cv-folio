// app/page.tsx ou app/layout.tsx

import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main className="flex justify-between items-center h-screen bg-black text-white px-40">
      {/* SVG com imagem clipada pela forma */}
      <div className="">
        <svg
          width="334"
          height="325"
          viewBox="0 0 424 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="formaClip">
              <path d="M98 97V0H380V400H330V296H223V400H0V97H98Z" />
            </clipPath>
          </defs>

          <image
            href="/images/jed.jpg"
            width="424"
            height="400"
            clipPath="url(#formaClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div className="rgihtside-content">
        <div className="text-[60px]" >Abner Lourenço</div>
        <div className="slogan">"Tentando chegar ao modo criativo"</div>
        <div className="solutions">
          <div className="opens-source"></div>
          <div className="projetos-privados-concluidos"></div>
        </div>
      </div>
    </main>
  );
}
