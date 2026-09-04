import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Terminal,
  Layers3,
  Braces,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing scalable APIs and backend systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
      "MVC Architecture",
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Working with structured and NoSQL data systems.",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Database Design",
      "Indexing",
      "Aggregation",
    ],
  },
  {
    title: "Programming",
    icon: Braces,
    description: "Strong foundation in programming and problem solving.",
    skills: [
      "Java",
      "JavaScript",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    description: "Tools used to build, manage and deploy applications.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Architecture",
    icon: Layers3,
    description: "Designing maintainable and production-ready systems.",
    skills: [
      "System Design",
      "Design Patterns",
      "Microservices",
      "Caching",
      "Redis",
      "Scalability",
    ],
  },
];

const stats = [
  {
    value: "450+",
    label: "LeetCode Problems",
  },
  {
    value: "10+",
    label: "Hackathons",
  },
  {
    value: "2+",
    label: "Production Projects",
  },
  {
    value: "∞",
    label: "Things to Learn",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#02080e] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background Grid */}
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

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#00ff66]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00ff66]/60" />

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00ff66]">
              03 // Skills
            </span>

            <span className="h-px w-10 bg-[#00ff66]/60" />
          </div>

          <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My <span className="text-[#00ff66]">Tech Stack</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to transform ideas into scalable,
            reliable and user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#061018]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00ff66]/40 hover:shadow-[0_0_30px_rgba(0,255,102,0.08)]"
              >
                {/* Top Green Line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff66]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#00ff66]/20 bg-[#00ff66]/5 text-[#00ff66]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-mono text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-xs text-gray-400 transition-colors hover:border-[#00ff66]/30 hover:text-[#00ff66]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#030a10]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.025] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>

            <span className="ml-2 font-mono text-xs text-gray-500">
              aditya@developer ~ /skills
            </span>
          </div>

          {/* Terminal Content */}
          <div className="grid gap-8 p-6 font-mono text-sm md:grid-cols-2 md:p-8">
            <div>
              <p className="text-gray-600">
                <span className="text-[#00ff66]">$</span> cat
                developer.json
              </p>

              <div className="mt-4 space-y-2 text-gray-400">
                <p>
                  <span className="text-[#00ff66]">{"{"}</span>
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">"role"</span>:{" "}
                  <span className="text-yellow-300">
                    "Full Stack Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">"focus"</span>:{" "}
                  <span className="text-yellow-300">
                    "Scalable Applications"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">"backend"</span>:{" "}
                  <span className="text-yellow-300">
                    "Node.js + Express"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">"frontend"</span>:{" "}
                  <span className="text-yellow-300">
                    "React.js"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-purple-400">"database"</span>:{" "}
                  <span className="text-yellow-300">
                    "MongoDB"
                  </span>
                </p>

                <p>
                  <span className="text-[#00ff66]">{"}"}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full">
                <p className="text-gray-600">
                  <span className="text-[#00ff66]">$</span> npm run
                  current-status
                </p>

                <div className="mt-5 space-y-3">
                  <p className="flex items-center gap-3 text-gray-400">
                    <span className="text-[#00ff66]">✓</span>
                    Building full-stack applications
                  </p>

                  <p className="flex items-center gap-3 text-gray-400">
                    <span className="text-[#00ff66]">✓</span>
                    Solving algorithmic problems
                  </p>

                  <p className="flex items-center gap-3 text-gray-400">
                    <span className="text-[#00ff66]">✓</span>
                    Learning system design
                  </p>

                  <p className="flex items-center gap-3 text-gray-400">
                    <span className="animate-pulse text-[#00ff66]">
                      ●
                    </span>
                    Always learning...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-[#061018]/70 md:grid-cols-4 md:divide-y-0"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group px-4 py-7 text-center transition-colors hover:bg-[#00ff66]/[0.025] sm:px-6"
            >
              <div className="font-mono text-2xl font-bold text-[#00ff66] sm:text-3xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Indicator */}
        <div className="mt-12 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600">
          <Terminal size={13} />

          <span>Always learning • Always building</span>

          <Cpu size={13} />
        </div>
      </div>
    </section>
  );
}

export default Skills;