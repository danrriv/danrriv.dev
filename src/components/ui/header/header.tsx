'use client';
import NavSticky from "./header-nav";

export default function Header() {
  return (
    <header className="h-23 flex items-center justify-between px-4">
      <span className="text-xl text-gray-800 dark:text-white pl-7 select-none pointer-events-none">
        &gt;<i className="cursor-blink">_</i>
      </span>
      <NavSticky />
      <style jsx>{`
        .cursor-blink {
          animation: blink 2s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </header>
  );
}