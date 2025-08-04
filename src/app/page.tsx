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
              <h3 className="text-[18px] font-semibold">
                2020 <br /> Studant Awards
              </h3>
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
              <h3 className="text-[18px] font-semibold">
                2020 <br /> Finish Hight School
              </h3>
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

      <div className="bg-[#333331] w-[444px] h-[651px] rounded-[70px] text-white scale-[.78] absolute top-[-30] left-[90] z-0 overflow-hidden">
        <img src="/images/hero-pic.png" className="relative bottom-30" />
      </div>
      
      <div className="absolute left-20 top-[350] w-[1268px] h-[801px]">
        <svg
          width="1168"
          height="701"
          viewBox="-613 -492 1268 801"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="absolute top-0 left-0"
        >
          <rect
            x="-161"
            y="-492"
            width="816"
            height="253"
            rx="70"
            ry="70"
            fill="#333331"
          />
          <rect
            x="-613"
            y="-239"
            width="444"
            height="548"
            rx="70"
            ry="70"
            fill="#333331"
          />
          <path
            d="M-80,-423C-80,-423,-117,-454,-120,-426C-122.67,-401.08,-128.67,-409.36,-132,-356C-135,-308,-135,-280,-157,-251C-177.61,-223.83,-200,-215,-236,-213C-276.33,-210.76,-331,-211,-331,-211"
            stroke="#333331"
            strokeWidth="53"
            fill="none"
          />
          <path
            d="M-234.45,-41.22C-234.45,-41.22,-244.65,-36.57,-251,-55C-259.17,-78.69,-197.06,-52.58,-195,-106C-192.71,-165.37,-186.20,-207.08,-175,-225C-160,-249,-135,-265,-89,-266"
            stroke="#333331"
            strokeWidth="53"
            fill="none"
          />
          <rect x="-547" y="-258" width="71" height="68" fill="#febe76" />
          <path
            d="M-504.99,-321.31C-490.49,-328.01,-473.99,-334.60,-475.49,-321.31C-476.99,-308.01,-478.49,-311.60,-489.99,-303.60C-501.49,-295.60,-509.99,-292.60,-512.49,-270.10C-514.99,-247.60,-510.99,-247.10,-510.99,-247.10C-512.63,-240.11,-516.92,-225.79,-535.46,-236.45C-554,-247.10,-545.55,-281.20,-537.49,-294.10C-530.10,-305.92,-519.49,-314.60,-504.99,-321.31Z"
            fill="#febe76"
            stroke="#febe76"
            strokeWidth="1"
          />
          <rect x="-463" y="-258" width="71" height="68" fill="#febe76" />
          <path
            d="M-420.99,-321.31C-406.49,-328.01,-389.99,-334.60,-391.49,-321.31C-392.99,-308.01,-394.49,-311.60,-405.99,-303.60C-417.49,-295.60,-425.99,-292.60,-428.49,-270.10C-430.99,-247.60,-426.99,-247.10,-426.99,-247.10C-428.63,-240.11,-432.92,-225.79,-451.46,-236.45C-470,-247.10,-461.55,-281.20,-453.49,-294.10C-446.10,-305.92,-435.49,-314.60,-420.99,-321.31Z"
            fill="#febe76"
            stroke="#febe76"
            strokeWidth="1"
          />
          <path
            d="M27.47,-424.53C28.84,-425.89,28.84,-428.11,27.47,-429.47L5.20,-451.75C3.83,-453.12,1.62,-453.12,0.25,-451.75C-1.12,-450.38,-1.12,-448.17,0.25,-446.80L20.05,-427L0.25,-407.20C-1.12,-405.83,-1.12,-403.62,0.25,-402.25C1.62,-400.88,3.83,-400.88,5.20,-402.25L27.47,-424.53ZM-87,-427L-87,-423.5L25,-423.5L25,-427L25,-430.5L-87,-430.5L-87,-427Z"
            fill="#febe76"
          />
        </svg>
      </div>
    </>
  );
}
