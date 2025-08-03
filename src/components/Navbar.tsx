"use client";

import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDiagramProject,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();
  const activeLinkClass = "text-[#febe76]";

  const getLinkClass = (path: string) => {
    return pathname === path ? activeLinkClass : "";
  };

  return (
    <>
      <div className=" bg-[#333331] p-4 rounded-[70px] fixed text-[#E7E9E8] top-[50vh] right-5 z-50 flex flex-col gap-8 overflow-hidden">
        <a
          href="/"
          title="Home"
          className={`hover:text-[#febe76] transition flex flex-col items-center gap-2 ${getLinkClass(
            "/",
          )}`}
        >
          <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              pathname === "/" ? "bg-[#febe76]" : "bg-transparent"
            }`}
          ></div>
        </a>
        <a
          href="/xp"
          title="Experiência"
          className={`hover:text-[#febe76] transition flex flex-col items-center gap-2 ${getLinkClass(
            "/xp",
          )}`}
        >
          <FontAwesomeIcon icon={faDiagramProject} className="w-4 h-4" />
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              pathname === "/xp" ? "bg-[#febe76]" : "bg-transparent"
            }`}
          ></div>
        </a>
        <a
          href="/about"
          title="Sobre"
          className={`hover:text-[#febe76] transition flex flex-col items-center gap-2 ${getLinkClass(
            "/about",
          )}`}
        >
          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              pathname === "/about" ? "bg-[#febe76]" : "bg-transparent"
            }`}
          ></div>
        </a>
      </div>
    </>
  );
}
