"use client";

import { FiArrowUp } from "react-icons/fi";
import { animateScroll } from "react-scroll";

export function Footer() {
  return (
    <footer className="flex items-center justify-between text-sm text-gray-400">
      <span>{new Date().getFullYear()}. Gregorio Suapero II.</span>
      <span
        className="flex items-center gap-1 cursor-pointer hover:text-slate-500"
        onClick={() => animateScroll.scrollToTop()}
      >
        <FiArrowUp />
        Back to top
      </span>
    </footer>
  );
}
