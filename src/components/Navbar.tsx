"use client";

import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDiagramProject,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const activeLinkClass = "text-[#febe76]";

  const getLinkClass = (path: string) => {
    return pathname === path ? activeLinkClass : "";
  };

  return (
    <>
      <div className=" bg-[#333331] p-4 rounded-[70px] fixed text-[#E7E9E8] top-[25vh] right-5 z-50 flex flex-col gap-8 overflow-hidden">
        <Link
              href="/"
              title="Home"
              className={`hover:text-[#febe76] transition-colors duration-300 flex flex-col items-center gap-2 ${
                pathname === '/' ? 'text-[#febe76]' : ''
              }`}
            >
              <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  pathname === '/' ? 'bg-[#febe76]' : 'bg-transparent'
                }`}
              ></div>
            </Link>
        <a
          href="/xp"
          title="Experiência"
          className={`hover:text-[#febe76] transition-colors duration-300 flex flex-col items-center gap-2 ${getLinkClass(
            "/xp/projects",
          )}`}
        >
          <FontAwesomeIcon icon={faDiagramProject} className="w-4 h-4" />
          <div
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              pathname === "/xp/projects" ? "bg-[#febe76]" : "bg-transparent"
            }`}
          ></div>
        </a>
        <a
          href="/cv.pdf" // Coloque o seu CV na pasta `public` e atualize este caminho se necessário
          download
          title="Download CV"
          className="hover:text-[#febe76] transition-colors duration-300 flex flex-col items-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
          {/* Este div vazio ajuda a manter o alinhamento consistente com os outros ícones */}
          <div className="w-1.5 h-1.5"></div>
        </a>
      </div>
    </>
  );
}
