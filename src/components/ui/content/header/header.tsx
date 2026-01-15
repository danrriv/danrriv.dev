'use client';
import NavSticky from "./header-nav";
import SwitchLang from "../../../switch-lang";

export default function Header() {

  return (
    <header className="h-22 flex items-center justify-between px-4">
      {/* Logo con cursor intermitente */}
      <a href="/">
        <span className="text-xl md:pl-3 md:visible invisible hover:text-teal-500 transition-colors duration-300 font-mono text-white">
          &gt;<i className="cursor-blink">_</i>
        </span>
      </a>

      <div className="flex items-center">
        <div className="sm:block hidden">
          <SwitchLang />
        </div>
        <NavSticky />
      </div>

      <style jsx>{`
        .cursor-blink {
          animation: blink 1s step-end infinite; /* Animación más parecida a terminal */
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </header>
  );
}