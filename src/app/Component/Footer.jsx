import React from "react";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`${inter.className} border-t border-white/10 bg-[#0f1116]`}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row sm:px-12">
        <span
          className={`${oswald.className} text-sm font-bold uppercase tracking-wide text-white`}
        >
          FitLog
        </span>

        <p className="text-center text-xs text-gray-400 sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard,
          log honest.
        </p>
      </div>
    </footer>
  );
}
