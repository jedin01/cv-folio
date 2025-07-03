import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XP",
  description: "home page for the portfolio app",
};

export default function XP() {
  return (
    <main id="xp">
      <div className="barra com empresas e tals"></div>
      <div className="timeline"></div>
    </main>
  );
}
