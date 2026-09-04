import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Code2,
  Rocket,
  Award,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const achievements = [
  {
    number: "01",
    icon: Trophy,
    title: "450+ LeetCode Problems",
    category: "Problem Solving",
    description:
      "Solved 450+ algorithmic problems covering arrays, strings, trees, graphs, dynamic programming, backtracking and more.",
    metric: "450+",
    metricLabel: "Problems",
  },
  {
    number: "02",
    icon: Rocket,
    title: "10+ Hackathons",
    category: "Hackathons",
    description:
      "Participated in 10+ hackathons, working under tight deadlines to design, develop and present technical solutions.",
    metric: "10+",
    metricLabel: "Hackathons",
  },
  {
    number: "03",
    icon: Code2,
    title: "Production Projects",
    category: "Development",
    description:
      "Built full-stack applications involving authentication, payments, databases, APIs and real-world application workflows.",
    metric: "2+",
    metricLabel: "Projects",
  },
  {
    number: "04",
    icon: Award,
    title: "Continuous Learning",
    category: "Growth",
    description:
      "Continuously expanding my knowledge across backend engineering, system design, databases, cloud technologies and software architecture.",
    metric: "∞",
    metricLabel: "Learning",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
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

      {/* Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#00ff66]/5 blur-[130px]" />

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
              06 // Achievements
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Milestones &{" "}
                <span className="text-[#00ff66]">Achievements</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                The milestones that represent my journey as a developer,
                problem solver and continuous learner.
              </p>
            </div>

            <div className="font-mono text-xs text-gray-600">
              status:{" "}
              <span className="text-[#00ff66]">building...</span>
            </div>
          </div>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#061018]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00ff66]/40 hover:shadow-[0_0_35px_rgba(0,255,102,0.06)] sm:p-7"
              >
                {/* Top line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff66]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 font-mono text-xs text-gray-700">
                  {achievement.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff66]/20 bg-[#00ff66]/5 text-[#00ff66] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.12)]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                {/* Category */}
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ff66]">
                  {achievement.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 max-w-[85%] font-mono text-xl font-semibold text-white transition-colors group-hover:text-[#00ff66]">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {achievement.description}
                </p>

                {/* Metric */}
                <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <span className="font-mono text-3xl font-bold text-white">
                      {achievement.metric}
                    </span>

                    <span className="ml-2 font-mono text-xs text-gray-600">
                      {achievement.metricLabel}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00ff66]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#030a10]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>

            <span className="font-mono text-xs text-gray-600">
              aditya@developer ~ /journey
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Terminal size={17} className="text-[#00ff66]" />

              <span className="font-mono text-sm text-gray-400">
                developer_journey.log
              </span>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-white/10" />

              <div className="space-y-8">
                <TimelineItem
                  year="NOW"
                  title="Building & Learning"
                  description="Working on full-stack applications and improving backend and system design skills."
                  active
                />

                <TimelineItem
                  year="2026"
                  title="Competitive Programming"
                  description="Reached 350+ solved problems on LeetCode while strengthening DSA fundamentals."
                />

                <TimelineItem
                  year="2025+"
                  title="Hackathon Journey"
                  description="Participated in multiple hackathons and built solutions under real-world constraints."
                />

                <TimelineItem
                  year="START"
                  title="Started Building"
                  description="Started the journey into web development and software engineering."
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-gray-600">
            <span className="text-[#00ff66]">&gt;</span> The journey is still
            being written...
            <span className="ml-1 animate-pulse text-[#00ff66]">_</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  title,
  description,
  active = false,
}) {
  return (
    <div className="relative flex gap-5">
      {/* Dot */}
      <div
        className={`relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border ${
          active
            ? "border-[#00ff66] bg-[#00ff66]/20 shadow-[0_0_12px_rgba(0,255,102,0.5)]"
            : "border-white/20 bg-[#030a10]"
        }`}
      >
        {active && (
          <span className="absolute inset-[3px] rounded-full bg-[#00ff66]" />
        )}
      </div>

      <div className="flex-1 pb-1">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`font-mono text-xs ${
              active ? "text-[#00ff66]" : "text-gray-600"
            }`}
          >
            [{year}]
          </span>

          <h4 className="font-mono text-sm font-semibold text-white sm:text-base">
            {title}
          </h4>
        </div>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Achievements;