import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDiagramProject,
  faUser,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className=" bg-[#333331] p-4 rounded-[70px] fixed text-[#E7E9E8] top-[50vh] right-5 z-50 flex flex-col gap-10 overflow-hidden">
        <a
          href="/"
          title="Home"
          className="hover:text-[#febe76] transition"
        >
          <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
        </a>
        <a
          href="/xp"
          title="Experiência"
          className="hover:text-[#febe76] transition"
        >
          <FontAwesomeIcon icon={faDiagramProject} className="w-4 h-4" />
        </a>
        <a
          href="/about"
          title="Sobre mim"
          className="hover:text-[#febe76] flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
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
