import { useState } from "react";
import { Menu, X, Send } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Achievements",
  "Blogs",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#071019]/80 px-5 py-3 backdrop-blur-xl">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-xl font-bold"
          >
            <span className="text-3xl text-[#00ff66]">
              {"</>"}
            </span>

            <span>
              Aditya <span className="text-[#00ff66]">Gupta</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-300 transition hover:text-[#00ff66]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-[#00ff66] px-5 py-2 text-sm font-medium text-[#00ff66] transition hover:bg-[#00ff66] hover:text-black md:flex"
          >
            <Send size={16} />
            Let's Talk
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition hover:text-[#00ff66]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}