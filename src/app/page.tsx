import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main className="">
      <div className="leftside-image"></div>
      <div className="rgihtside-content">
        <div className="name">Abner Lourenço</div>
        <div className="slogan">"Tentando chegar ao modo criativo"</div>
      </div>
    </main>
  );
}
