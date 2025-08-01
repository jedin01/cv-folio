import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <p className="text-[140px] leading-[120px] font-extrabold absolute top-[40px] left-[520px] text-[#333331]">
        Abner <br /> Lourenço
      </p>

      <div className="absolute top-100 left-190 z-40 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <button className="border-[#febe76] text-[#febe76] font-semibold border p-2 rounded-[70px] text-[20px]">
            Contacto
          </button> 
          <p className="font-semibold text-[#fff]">abnerjaredejede@gmail.com</p>
        </div>
        <div className="text-[#fff] flex flex-col gap-5">
          <p className="font-bold">
            Tel.: <span className="font-extralight">+244 957 024 977</span>
          </p>

          <div className="flex justify-between">
            <GithubIcon />
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>

      <div className="bg-[#333331] w-[416px] h-[651px] rounded-[70px] text-white scale-[.78] absolute top-[-30] left-[90] z-0"></div>
      <div className="h-[1700px] w-[1200px] bg-[url('/images/fundo.svg')] bg-contain bg-center bg-no-repeat relative top-[-150] z-10"></div>
    </>
  );
}
