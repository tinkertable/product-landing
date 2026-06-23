"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#features", label: "기능" },
  { href: "#compare", label: "비교" },
  { href: "#reviews", label: "후기" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (solid
          ? "border-b border-line bg-night/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent")
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-black tracking-tight text-snow">
          {site.brand}
          <span className="text-volt">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-mute transition-colors hover:text-snow"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#order"
          className="rounded-full bg-volt px-5 py-2.5 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          구매하기
        </a>
      </nav>
    </header>
  );
}
