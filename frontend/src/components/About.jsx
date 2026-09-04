import { motion } from "framer-motion";
import {FaGithub} from "react-icons/fa";
import {
  Code2,
  Database,
  Server,
  Terminal,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, JavaScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express, REST APIs",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, MySQL",
  },
  {
    icon: Terminal,
    title: "Problem Solving",
    description: "DSA, Algorithms & LeetCode",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#02080e]
        px-5
        py-24
        text-white
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,255,102,0.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0,255,102,0.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "38px 38px",
          }}
        />

        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#00ff66]/5 blur-[130px]" />

        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#00ff66]/5 blur-[130px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-[#00ff66]">
              01.
            </span>

            <span className="h-px w-10 bg-[#00ff66]/50" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Turning ideas into{" "}
            <span className="text-[#00ff66]">
              digital experiences.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A developer who enjoys building things, solving
            problems and constantly learning something new.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= ABOUT CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#071019]/70
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* Terminal header */}

            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00ff66]" />
              </div>

              <span className="font-mono text-[10px] text-gray-600">
                about.js
              </span>
            </div>

            {/* Code-style introduction */}

            <div className="font-mono text-sm leading-7 sm:text-base">

              <p className="text-purple-400">
                const{" "}
                <span className="text-white">
                  developer
                </span>{" "}
                = {"{"}
              </p>

              <p className="pl-4 text-gray-500">
                name:
                <span className="text-[#00ff66]">
                  "Aditya Gupta"
                </span>
                ,
              </p>

              <p className="pl-4 text-gray-500">
                role:
                <span className="text-yellow-300">
                  "Full Stack Developer"
                </span>
                ,
              </p>

              <p className="pl-4 text-gray-500">
                passion:
                <span className="text-[#00ff66]">
                  "Building"
                </span>
                ,
              </p>

              <p className="pl-4 text-gray-500">
                mindset:
                <span className="text-[#00ff66]">
                  "Always Learning"
                </span>
                ,
              </p>

              <p className="pl-4 text-gray-500">
                coffee:
                <span className="text-yellow-300">
                  true
                </span>
              </p>

              <p className="text-gray-400">
                {"}"};
              </p>
            </div>

            {/* Description */}

            <div className="mt-8 space-y-4 text-sm leading-7 text-gray-400 sm:text-base">
              <p>
                I'm a Computer Science student and Full Stack
                Developer who enjoys creating useful,
                scalable and interactive web applications.
              </p>

              <p>
                My main focus is the MERN stack, while I'm also
                expanding my knowledge of Java, Spring Boot,
                databases and system design.
              </p>

              <p>
                Outside of building projects, I spend a lot of
                time solving DSA problems and participating in
                hackathons.
              </p>
            </div>

            {/* Location / education */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <MapPin
                  size={19}
                  className="text-[#00ff66]"
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Based in
                  </p>

                  <p className="text-sm text-gray-300">
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <GraduationCap
                  size={19}
                  className="text-[#00ff66]"
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Education
                  </p>

                  <p className="text-sm text-gray-300">
                    B.Tech CSE
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="grid gap-6">

            {/* Highlights */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {highlights.map(
                ({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#071019]/70
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#00ff66]/30
                    "
                  >
                    <div
                      className="
                        mb-5
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#00ff66]/20
                        bg-[#00ff66]/5
                        text-[#00ff66]
                        transition
                        group-hover:border-[#00ff66]/50
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <h3 className="font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                )
              )}
            </motion.div>

            {/* GitHub-style card */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#00ff66]/20
                bg-[#071019]/80
                p-6
                backdrop-blur-xl
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ff66]/10 text-[#00ff66]">
                    <FaGithub size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Open Source
                    </h3>

                    <p className="text-xs text-gray-500">
                      Building in public
                    </p>
                  </div>

                </div>

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff66] shadow-[0_0_10px_#00ff66]" />
              </div>

              {/* Contribution placeholder */}

              <div className="mt-6">

                <p className="mb-3 font-mono text-xs text-gray-600">
                  contribution_activity
                </p>

                <div className="grid grid-cols-12 gap-1.5">
                  {Array.from({ length: 72 }).map(
                    (_, index) => (
                      <span
                        key={index}
                        className={`
                          aspect-square
                          rounded-[2px]
                          ${
                            index % 7 === 0
                              ? "bg-[#00ff66]/70"
                              : index % 5 === 0
                              ? "bg-[#00ff66]/40"
                              : index % 3 === 0
                              ? "bg-[#00ff66]/20"
                              : "bg-white/5"
                          }
                        `}
                      />
                    )
                  )}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-gray-600">
                <span>Less</span>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-white/5" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00ff66]/20" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00ff66]/40" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00ff66]/70" />
                </div>

                <span>More</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}