import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XP",
  description: "home page for the portfolio app",
};

export default function XP() {
  return (
    <main id="xp" className="flex">
      <div className="w-[10vw] h-[100vh] flex">
        <h3 className="text-[#333331] text-[121px] font-black rotate-270 ">PROJECTS</h3>
      </div>
      <section className="bg-[#333331] w-[90vw] h-[100vh]">
        
      </section>
    </main>
  );
}
