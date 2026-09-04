import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Server,
  Database,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Distributed URL Shortener",
    description:
      "A scalable Bitly-style URL shortening backend designed with caching and distributed-system concepts for fast URL redirection.",
    type: "Backend / System Design",
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis"],
    icon: Server,
    github: "https://github.com/Adityagupta6393/URL-Shortener",
    live: "https://url-shortener-frontend-gamma-inky.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with authentication, product management, cart, wishlist, orders and online payment integration.",
    type: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    icon: Layers3,
    github: "https://github.com/Adityagupta6393/E-Commerce-Website",
    live: " https://e-commerce-frontend-ivory-alpha.vercel.app",
    featured: true,
  },
  
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#02080e] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff66 1px, transparent 1px),
            linear-gradient(90deg, #00ff66 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-[450px] w-[450px] rounded-full bg-[#00ff66]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#00ff66]/60" />

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00ff66]">
              04 // Projects
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Things I've <span className="text-[#00ff66]">Built</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                A collection of applications and systems I've built while
                exploring full-stack development, backend engineering and
                scalable architecture.
              </p>
            </div>

            <div className="font-mono text-xs text-gray-600">
              <span className="text-[#00ff66]">const</span> projects ={" "}
              <span className="text-white">4</span>;
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#061018]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00ff66]/40 hover:shadow-[0_0_40px_rgba(0,255,102,0.07)]"
              >
                {/* Project Preview */}
                <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#030a10] sm:h-72">
                  {/* Fake browser/editor window */}
                  <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/10 bg-[#02070c]">
                    {/* Header */}
                    <div className="flex h-9 items-center gap-2 border-b border-white/10 px-3">
                      <span className="h-2 w-2 rounded-full bg-red-400/60" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                      <span className="h-2 w-2 rounded-full bg-green-400/60" />

                      <div className="ml-3 h-4 flex-1 rounded bg-white/[0.03]" />
                    </div>

                    {/* Code Visualization */}
                    <div className="p-5 font-mono text-[10px] leading-6 text-gray-600 sm:text-xs">
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-[#00ff66]">app</span> ={" "}
                        <span className="text-yellow-300">
                          express
                        </span>
                        ();
                      </p>

                      <p className="pl-4">
                        app.<span className="text-[#00ff66]">use</span>(
                        <span className="text-yellow-300">
                          middleware
                        </span>
                        );
                      </p>

                      <p className="mt-2">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-[#00ff66]">data</span> ={" "}
                        <span className="text-yellow-300">
                          await
                        </span>{" "}
                        database.find();
                      </p>

                      <p className="mt-2">
                        <span className="text-gray-700">// scalable</span>
                      </p>

                      <p>
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-[#00ff66]">
                          response
                        </span>
                        .json(data);
                      </p>
                    </div>

                    {/* Green Glow */}
                    <div className="absolute bottom-[-100px] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#00ff66]/10 blur-[70px]" />
                  </div>

                  {/* Project Icon */}
                  <div className="absolute bottom-8 left-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff66]/30 bg-[#03100b] text-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.12)]">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  {/* Number */}
                  <span className="absolute right-8 top-8 font-mono text-xs text-gray-600">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ff66]">
                      {project.type}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all hover:border-[#00ff66]/40 hover:text-[#00ff66]"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub size={16} />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all hover:border-[#00ff66]/40 hover:text-[#00ff66]"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-mono text-xl font-semibold text-white transition-colors group-hover:text-[#00ff66]">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-gray-400 transition-colors group-hover:border-[#00ff66]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <div className="mt-6 flex items-center gap-2 font-mono text-xs text-gray-600 transition-colors group-hover:text-[#00ff66]">
                    <span>view_project()</span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="font-mono text-xs text-gray-600">
            More projects available on GitHub
          </p>

          <a
            href="https://github.com/Adityagupta6393/"
            className="group flex items-center gap-2 rounded-lg border border-[#00ff66]/30 px-5 py-3 font-mono text-xs text-[#00ff66] transition-all hover:bg-[#00ff66]/5 hover:shadow-[0_0_25px_rgba(0,255,102,0.08)]"
          >
            <FaGithub size={16} />

            <span>VIEW GITHUB</span>

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;