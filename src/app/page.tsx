import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <p className="text-[140px] leading-[120px] font-extrabold absolute top-[40px] left-[520px] text-[#333331]">
        Abner <br /> Lourenço
      </p>
      
      <section className="absolute z-40 left-[180] text-[#333331] top-270 flex w-[300px] justify-between">
        <div className="">
          <div className="mb-2 text-[20px]">
            <h3 className="font-bold">Habilidades</h3>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold">Ilustrador</h3>
              <p className="text-[16px] font-extralight text-justify">
                (Comics and such so)
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="bg-[#333331] w-5 h-5 rounded-full"></div>
            <div className="bg-[#333331] w-5 h-5 rounded-full"></div>
            <div className="bg-[#333331] w-5 h-5 rounded-full"></div>
            <div className="bg-[#333331] w-5 h-5 rounded-full"></div>
            <div className="bg-[#333331] w-5 h-5 rounded-full"></div>
          </div>
        </div>
      </section>
      
      <section className="flex absolute z-40 top-170 left-140 text-[#333331] w-[650px] justify-between">
        <div className="w-[300px]">
          <div className="mb-2 text-[20px]">
            <h3 className="font-bold">Prêmios</h3>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold">2020 <br/> Studant Awards</h3>
              <p className="text-[16px] font-extralight text-justify">
                Inaugurado em novembro de 2023, este novo aeroporto, localizado
                a cerca de 40 km do centro de Luanda, está a expandir
                gradualmente suas operações. A transferência completa dos voos
                internacionais está prevista para outubro de 2025
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="mb-2 text-[20px]">
            <h3 className="font-bold">Experiência</h3>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold">2020 <br/> Finish Hight School</h3>
              <p className="text-[16px] font-extralight text-justify">
                Inaugurado em novembro de 2023, este novo aeroporto, localizado
                a cerca de 40 km do centro de Luanda, está a expandir
                gradualmente suas operações. A transferência completa dos voos
                internacionais está prevista para outubro de 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="absolute top-100 left-190 z-40 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <button className="border-[#febe76] text-[#febe76] font-semibold border p-2 rounded-[70px] text-[20px] hover:bg-[#febe76] hover:text-[#333331] duration-300">
            Contacto
          </button>
          <p className="font-semibold text-[#febe76]">
            abnerjaredejede@gmail.com
          </p>
        </div>
        <div className="text-[#fff] flex flex-col gap-5">
          <p className="font-bold">
            Tel.:{" "}
            <span className="font-extralight">
              +244 934 424 130 | +244 957 024 977
            </span>
          </p>

          <div className="flex justify-between gap-4">
            <a
              href="https://github.com/jedin01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-3 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/abnerlouren"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-3 transition-all duration-300 hover:bg-blue-700 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com/abner.jarede.2007"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/teu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-3 transition-all duration-300 hover:bg-pink-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/jdn_098"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-3 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-[300px] absolute z-40 top-170 left-44 text-white text-[20px] flex flex-col gap-5">
        <h3 className="font-bold">Lorem ocupusolos, cons cmnipa spise</h3>
        <p className="font-extralight text-[18px text-justify]">
          O projeto do metro de superfície, com uma extensão inicial de 60 km,
          recebeu autorização presidencial para despesas de 2,3 mil milhões de
          euros.
        </p>
      </div>
      
      <div className="bg-[#333331] w-[416px] h-[651px] rounded-[70px] text-white scale-[.78] absolute top-[-30] left-[90] z-0 overflow-hidden">
        <img src="/images/hero-pic.png" className="relative bottom-30" />
      </div>
      <div className="h-[1700px] w-[1200px] bg-[url('/images/fundo.svg')] bg-contain bg-center bg-no-repeat relative top-[-150] z-10"></div>
    </>
  );
}
