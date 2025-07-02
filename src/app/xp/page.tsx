import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XP",
  description: "home page for the portfolio app",
};

export default function XP() {
  return (
    <main>
      <div className="barra com empresas e tals"></div>
      <div className="timeline"></div>
    </main>
  );
}
