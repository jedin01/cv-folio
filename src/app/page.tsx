// app/page.tsx ou app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import { Terminal } from "../components/Terminal";

export const metadata: Metadata = {
  title: "Home",
  description: "home page for the portfolio app",
};

export default function Home() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <Terminal />
    </main>
  );
}
