// app/page.tsx ou app/layout.tsx

import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main
      id="home"
      className=" h-screen text-white  pt-24 flex justify-between"
    >
      <div className="rightside-content flex flex-col h-fit gap-20">
        <div className="h-fit">
          <div className="text-[65px] font-bold leading-tight ">
            Abner{" "}
            <p className="ml-[70px]">
              Lourenço<span className="text-green-500">.</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="bg-green-500 px-10 py-4 rounded-[5px]">
            Avançar
          </button>
          <button className="border-2 border-green-500 text-green-500 px-12 py-4 rounded-[5px] hover:text-white hover hover:bg-green-500 transition-[2s]">
            Descarrecar CV
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <svg
          width="374"
          height="350"
          viewBox="0 0 424 400"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="formaClip">
              <path d="M419 -0.5C422.038 -0.5 424.5 1.96243 424.5 5V64C424.5 67.0376 422.038 69.5 419 69.5H380.5V394.909C380.5 397.935 378.049 400.5 375 400.5H335C331.962 400.5 329.5 398.038 329.5 395V390H223.5V395C223.5 398.038 221.038 400.5 218 400.5H5C1.96243 400.5 -0.5 398.038 -0.5 395V102C-0.5 98.9624 1.96243 96.5 5 96.5H93C95.4853 96.5 97.5 94.4853 97.5 92V5C97.5 1.96243 99.9624 -0.5 103 -0.5H419Z" />
            </clipPath>
          </defs>

          <image
            href="/images/jed.png"
            width="424"
            height="400"
            clipPath="url(#formaClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </main>
  );
}
