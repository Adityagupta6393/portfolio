import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Braces,
  Trophy,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import profile from "../assets/profile.webp";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: "450+",
    label: "LeetCode",
    icon: Code2,
  },
  {
    value: "15+",
    label: "GitHub Repos",
    icon: FaGithub,
  },
  {
    value: "10+",
    label: "Hackathons",
    icon: Trophy,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/adityagupta50",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:adityagupta6393@gmail.com",
  },
];

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
  "Git",
  "Docker",
  "Tailwind",
  "VS Code",
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#02080e]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Developer grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.13]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,255,102,0.10) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0,255,102,0.10) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "38px 38px",
          }}
        />

        {/* Left glow */}
        <div
          className="
            absolute
            left-[5%]
            top-[25%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#00ff66]/5
            blur-[120px]
          "
        />

        {/* Portrait glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#00ff66]/10
            blur-[140px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[200px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#00ff66]/5
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          BACKGROUND CODE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[19%]
          hidden
          select-none
          font-mono
          text-[11px]
          leading-5
          text-[#173438]
          lg:block
        "
      >
        <p>const developer = {"{"}</p>

        <p className="pl-4">
          code: true,
        </p>

        <p className="pl-4">
          learn: true,
        </p>

        <p className="pl-4">
          build: true,
        </p>

        <p className="pl-4">
          improve: true,
        </p>

        <p>{"};"}</p>
      </div>

      {/* =====================================================
          SOCIAL RAIL - DESKTOP
      ====================================================== */}

      <div
        className="
          fixed
          left-4
          top-1/2
          z-50
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#071019]/80
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >
          {socialLinks.map(
            ({ icon: Icon, label, href }, index) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={
                  href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-gray-400
                  transition-all
                  duration-300
                  hover:bg-[#00ff66]/10
                  hover:text-[#00ff66]
                  ${
                    index !== socialLinks.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                `}
              >
                <Icon size={18} />
              </a>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          pb-12
          pt-28
          sm:px-8
          lg:px-12
          lg:pb-24
          lg:pt-28
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-0
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              z-30
            "
          >

            {/* -------------------------------------------------
                GREETING
            ------------------------------------------------- */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                sm:mb-6
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#00ff66]
                  shadow-[0_0_12px_#00ff66]
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-[#00ff66]
                  sm:text-base
                "
              >
                Hello World!
              </span>

              <span className="animate-pulse text-white">
                |
              </span>
            </div>

            {/* -------------------------------------------------
                NAME
            ------------------------------------------------- */}

            <h1
              className="
                font-black
                leading-[0.88]
                tracking-[-0.045em]
              "
            >
              <span
                className="
                  block
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[4.5rem]
                  xl:text-[5.2rem]
                "
              >
                I'm
              </span>

              <span
                className="
                  mt-2
                  block
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[4.5rem]
                  xl:text-[5.2rem]
                "
              >
                Aditya{" "}
                <span className="text-[#00ff66]">
                  Gupta
                </span>
              </span>
            </h1>

            {/* -------------------------------------------------
                ROLE
            ------------------------------------------------- */}

            <h2
              className="
                mt-6
                text-lg
                font-bold
                sm:text-xl
                md:text-2xl
                lg:text-[1.55rem]
              "
            >
              Full Stack Developer

              <span className="mx-2 text-[#00ff66]">
                |
              </span>

              Problem Solver
            </h2>

            {/* -------------------------------------------------
                DESCRIPTION
            ------------------------------------------------- */}

            <div
              className="
                mt-6
                max-w-[570px]
                border-l-2
                border-[#00ff66]
                pl-4
                sm:pl-5
              "
            >
              <p
                className="
                  text-sm
                  leading-6
                  text-gray-400
                  sm:text-base
                  sm:leading-7
                "
              >
                Building modern web applications with
                React, Node.js & MongoDB.
              </p>

              <p
                className="
                  text-sm
                  leading-6
                  text-gray-400
                  sm:text-base
                  sm:leading-7
                "
              >
                Passionate about clean code, scalable
                systems and solving challenging problems
                on LeetCode.
              </p>
            </div>

            {/* -------------------------------------------------
                BUTTONS
            ------------------------------------------------- */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:gap-4
              "
            >
              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-[#00ff66]
                  px-7
                  py-3.5
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_0_30px_rgba(0,255,102,0.3)]
                "
              >
                View Projects

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-[#00ff66]/60
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#00ff66]/10
                  hover:shadow-[0_0_25px_rgba(0,255,102,0.12)]
                "
              >
                <Mail size={18} />

                Contact Me
              </a>
            </div>

            {/* -------------------------------------------------
                STATS
            ------------------------------------------------- */}

            <div
              className="
                mt-9
                grid
                max-w-[570px]
                grid-cols-3
                gap-3
                sm:mt-10
                sm:gap-5
              "
            >
              {stats.map(
                ({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      sm:gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#00ff66]/20
                        bg-[#071019]/70
                        text-[#00ff66]
                        transition-all
                        duration-300
                        group-hover:border-[#00ff66]/60
                        group-hover:shadow-[0_0_20px_rgba(0,255,102,0.1)]
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <div>
                      <p
                        className="
                          text-xl
                          font-bold
                          sm:text-2xl
                        "
                      >
                        {value}
                      </p>

                      <p
                        className="
                          text-[10px]
                          text-gray-500
                          sm:text-xs
                        "
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* -------------------------------------------------
                MOBILE SOCIAL
            ------------------------------------------------- */}

            <div
              className="
                mt-7
                flex
                gap-2
                lg:hidden
              "
            >
              {socialLinks.map(
                ({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      text-gray-400
                      transition-all
                      duration-300
                      hover:border-[#00ff66]
                      hover:text-[#00ff66]
                    "
                  >
                    <Icon size={17} />
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              lg:min-h-[620px]
            "
          >

            {/* =================================================
                PORTRAIT AREA
            ================================================= */}

            <div
              className="
                relative
                flex
                h-[350px]
                w-[350px]
                items-center
                justify-center
                sm:h-[440px]
                sm:w-[440px]
                lg:h-[550px]
                lg:w-[550px]
              "
            >

              {/* -----------------------------------------------
                  GREEN BACKLIGHT
              ----------------------------------------------- */}

              <div
                className="
                  absolute
                  inset-[5%]
                  rounded-full
                  bg-[#00ff66]/8
                  blur-[80px]
                "
              />

              {/* -----------------------------------------------
                  OUTER RING
              ----------------------------------------------- */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#00ff66]/30
                  shadow-[0_0_35px_rgba(0,255,102,0.12)]
                "
              />

              {/* -----------------------------------------------
                  MAIN NEON RING
              ----------------------------------------------- */}

              <div
                className="
                  absolute
                  inset-[4%]
                  rounded-full
                  border-[4px]
                  border-[#00ff66]
                  shadow-[0_0_12px_#00ff66,0_0_35px_rgba(0,255,102,0.45),inset_0_0_25px_rgba(0,255,102,0.12)]
                "
              />

              {/* -----------------------------------------------
                  INNER RING
              ----------------------------------------------- */}

              <div
                className="
                  absolute
                  inset-[7%]
                  rounded-full
                  border
                  border-[#00ff66]/40
                "
              />

              {/* =================================================
                  IMAGE WINDOW

                  THIS IS THE IMPORTANT PART.

                  The image itself can be larger than the circle,
                  but overflow-hidden prevents it from escaping.
              ================================================== */}

              <div
                className="
                  absolute
                  inset-[7%]
                  overflow-hidden
                  rounded-full
                  bg-[#03100b]/20
                "
              >
                <motion.img
                  src={profile}
                  alt="Aditya Gupta"
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-0
                    z-10
                    w-[135%]
                    max-w-none
                    -translate-x-1/2
                    object-contain
                    object-top
                    brightness-[0.70]
                    contrast-[1.08]
                    saturate-[0.88]
                  "
                />
              </div>

              {/* -----------------------------------------------
                  INNER EDGE
              ----------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7%]
                  z-20
                  rounded-full
                  border
                  border-[#00ff66]/50
                "
              />

              {/* =================================================
                  FLOATING CODE ICON
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[-1%]
                  top-[14%]
                  z-30
                  rounded-xl
                  border
                  border-[#00ff66]/40
                  bg-[#071019]/85
                  p-3
                  text-[#00ff66]
                  shadow-[0_0_25px_rgba(0,255,102,0.08)]
                  backdrop-blur-xl
                  sm:left-[2%]
                  sm:p-4
                "
              >
                <Code2 size={25} />
              </motion.div>

              {/* =================================================
                  FLOATING BRACES
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[-1%]
                  top-[15%]
                  z-30
                  rounded-xl
                  border
                  border-[#00ff66]/30
                  bg-[#071019]/80
                  px-3
                  py-2
                  text-[#00ff66]
                  shadow-[0_0_20px_rgba(0,255,102,0.06)]
                  backdrop-blur-xl
                  sm:right-[2%]
                "
              >
                <Braces size={24} />
              </motion.div>

              {/* =================================================
                  DECORATIVE GREEN DOTS
              ================================================== */}

              <div
                className="
                  absolute
                  right-[4%]
                  top-[26%]
                  z-0
                  hidden
                  grid
                  grid-cols-5
                  gap-2
                  opacity-60
                  sm:grid
                "
              >
                {Array.from({ length: 25 }).map(
                  (_, index) => (
                    <span
                      key={index}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#00ff66]
                      "
                    />
                  )
                )}
              </div>

              {/* =================================================
                  CODE EDITOR CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                }}
                className="
                  absolute
                  bottom-[2%]
                  right-[-3%]
                  z-40
                  hidden
                  w-[245px]
                  rounded-xl
                  border
                  border-[#00ff66]/30
                  bg-[#050b11]/95
                  p-3
                  font-mono
                  text-[10px]
                  shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                  backdrop-blur-xl
                  md:block
                  lg:w-[270px]
                "
              >

                {/* Window header */}
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-2
                  "
                >
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-[#00ff66]" />
                  </div>

                  <span className="text-[9px] text-gray-600">
                    developer.js
                  </span>
                </div>

                {/* Code */}
                <p className="text-purple-400">
                  const{" "}
                  <span className="text-white">
                    aditya
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="pl-3 text-[#00ff66]">
                  skills:
                </p>

                <p className="pl-6 text-gray-400">
                  ["React",
                </p>

                <p className="pl-6 text-gray-400">
                  "Node.js",
                </p>

                <p className="pl-6 text-gray-400">
                  "MongoDB",
                </p>

                <p className="pl-6 text-gray-400">
                  "Java"]
                </p>

                <p className="mt-1 pl-3 text-[#00ff66]">
                  focus:
                </p>

                <p className="pl-6 text-yellow-300">
                  "Full Stack"
                </p>

                <p className="pl-3 text-[#00ff66]">
                  goal:
                </p>

                <p className="pl-6 text-gray-400">
                  "Build Scalable Apps"
                </p>

                <p className="text-gray-400">
                  {"}"};
                </p>

                <p className="mt-3 text-gray-600">
                  // Let's build something amazing!
                </p>
              </motion.div>

              {/* =================================================
                  SMALL GREEN DOT
              ================================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-[31%]
                  left-[2%]
                  z-30
                  h-2
                  w-2
                  rounded-full
                  bg-[#00ff66]
                  shadow-[0_0_15px_#00ff66]
                "
              />

              {/* =================================================
                  DECORATIVE ARROW
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  right-[3%]
                  z-20
                  hidden
                  rotate-[-25deg]
                  text-5xl
                  font-light
                  text-[#00ff66]/60
                  lg:block
                "
              >
                ↗
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TECH STACK BAR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-40
          hidden
          px-5
          pb-3
          md:block
          lg:px-7
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#071019]/85
            backdrop-blur-xl
          "
        >

          {/* Label */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              border-r
              border-white/10
              px-5
              py-4
            "
          >
            <Code2
              size={22}
              className="text-[#00ff66]"
            />

            <span className="text-sm font-bold">
              Tech Stack
            </span>
          </div>

          {/* Technologies */}
          <div
            className="
              flex
              min-w-0
              flex-1
              items-center
              justify-around
              gap-5
              overflow-hidden
              px-5
              py-3
            "
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  whitespace-nowrap
                  text-xs
                  text-gray-400
                  transition-colors
                  duration-300
                  hover:text-[#00ff66]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE TECH STACK
      ====================================================== */}

      <div
        className="
          relative
          z-30
          px-5
          pb-7
          md:hidden
        "
      >
        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#071019]/80
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-white/10
              px-4
              py-3
            "
          >
            <Code2
              size={18}
              className="text-[#00ff66]"
            />

            <span className="text-sm font-bold">
              Tech Stack
            </span>
          </div>

          <div
            className="
              flex
              gap-5
              overflow-x-auto
              px-4
              py-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  shrink-0
                  whitespace-nowrap
                  text-xs
                  text-gray-400
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}