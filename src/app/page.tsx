// app/page.tsx ou app/layout.tsx

import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main id="home" className="flex justify-between items-center h-screen text-white px-40">
      {/* SVG com imagem clipada pela forma */}
      <div className="">
        <svg
          width="324"
          height="300"
          viewBox="0 0 424 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="formaClip">
              <path d="M419 -0.5C422.038 -0.5 424.5 1.96243 424.5 5V64C424.5 67.0376 422.038 69.5 419 69.5H380.5V394.909C380.5 397.935 378.049 400.5 375 400.5H335C331.962 400.5 329.5 398.038 329.5 395V390H223.5V395C223.5 398.038 221.038 400.5 218 400.5H5C1.96243 400.5 -0.5 398.038 -0.5 395V102C-0.5 98.9624 1.96243 96.5 5 96.5H93C95.4853 96.5 97.5 94.4853 97.5 92V5C97.5 1.96243 99.9624 -0.5 103 -0.5H419Z" />
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

      <div className="rightside-content flex flex-col justify-between h-[310px]">
        <div className="">
          <div className="text-[65px] font-bold leading-tight">
            Abner Lourenço
          </div>

          <div className="text-xl italic font-[Archivo]">
            "Tentando chegar ao modo criativo"
          </div>
        </div>

        <div className="flex justify-between gap-10 w-full text-white py-6">
          {[
            { title: "Open source", value: "201" },
            { title: "Private", value: "07" },
            { title: "Art", value: "321" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <h3 className="uppercase tracking-wider font-[Archivo] text-sm md:text-base text-gray-300">
                {item.title}
              </h3>
              <div className="w-8 h-1 bg-white rounded" />
              <p className="text-[48px] md:text-[64px] font-black leading-none">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
