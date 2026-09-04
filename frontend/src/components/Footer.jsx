import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowUp,
  Mail,
  Terminal,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Adityagupta6393/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-gupta-delhi/",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "https://x.com/adityagupta50",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "adityagupta6393@gmail.com",
    icon: Mail,
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Activity", href: "#stats" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02080e]">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff66 1px, transparent 1px),
            linear-gradient(90deg, #00ff66 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#00ff66]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="#home"
              className="inline-flex items-center gap-3 font-mono text-xl font-bold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00ff66]/30 bg-[#00ff66]/5 text-[#00ff66]">
                {"<"}
              </span>

              Aditya
              <span className="text-[#00ff66]">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Full Stack Developer focused on building scalable applications,
              solving challenging problems and continuously learning new
              technologies.
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-gray-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff66]" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#00ff66]">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group font-mono text-xs text-gray-600 transition-colors hover:text-white"
                >
                  <span className="mr-2 text-gray-800 transition-colors group-hover:text-[#00ff66]">
                    →
                  </span>

                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#00ff66]">
              Connect
            </h3>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    aria-label={item.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all hover:border-[#00ff66]/40 hover:bg-[#00ff66]/5 hover:text-[#00ff66]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            <p className="mt-5 font-mono text-[10px] leading-5 text-gray-700">
              Open to internships, collaborations
              <br />
              and interesting engineering problems.
            </p>
          </motion.div>
        </div>

        {/* Terminal Divider */}
        <div className="my-12 h-px bg-white/10" />

        <div className="mb-8 flex items-center gap-3 font-mono text-xs text-gray-700">
          <Terminal size={14} className="text-[#00ff66]" />

          <span>
            <span className="text-[#00ff66]">$</span> echo "Thanks for
            visiting"
          </span>

          <span className="hidden text-[#00ff66] sm:inline">
            ✓
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="font-mono text-[10px] text-gray-700 sm:text-xs">
            © {new Date().getFullYear()} Aditya Gupta. Built with React.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-gray-500 transition-all hover:border-[#00ff66]/30 hover:text-[#00ff66]"
          >
            Back to top

            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;