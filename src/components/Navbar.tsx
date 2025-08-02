import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDiagramProject,
  faBriefcase,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className=" bg-[#333331] p-4 rounded-[70px] fixed text-[#E7E9E8] top-[50vh] right-5 z-50 flex flex-col gap-10 overflow-hidden">
        <a href="/home" className="hover:text-[#febe76] transition">
          <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
        </a>
        <a href="/experiencia" className="hover:text-[#febe76] transition">
          <FontAwesomeIcon icon={faDiagramProject} className="w-4 h-4" />
        </a>
        <a
          href="/empresas_parcerias_projetos"
          className="hover:text-[#febe76] transition"
        >
          <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
        </a>
        <a href="/sobre" className="hover:text-[#febe76] flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
