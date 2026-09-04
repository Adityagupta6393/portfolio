import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import {
  Trophy,
  GitCommit,
  Star,
  Code2,
  ExternalLink,
  Flame,
} from "lucide-react";

const getActivityColor = (count) => {
  if (count === 0) return "bg-white/[0.03]";
  if (count <= 2) return "bg-[#00ff66]/20";
  if (count <= 5) return "bg-[#00ff66]/40";
  if (count <= 10) return "bg-[#00ff66]/60";

  return "bg-[#00ff66]";
};

const Stats = () => {
  const [githubData, setGithubData] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  const [leetcodeData, setLeetcodeData] = useState(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [leetcodeError, setLeetcodeError] = useState(false);

  // -----------------------------
  // GitHub API
  // -----------------------------

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setGithubLoading(true);

        const response = await axios.get(
          `https://portfolio-2n34.onrender.com/api/github`
        );

        if (response.data.success) {
          setGithubData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setGithubError(true);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // -----------------------------
  // LeetCode API
  // -----------------------------

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        setLeetcodeLoading(true);

        const response = await axios.get(
          `https://portfolio-2n34.onrender.com/api/leetcode`
        );

        if (response.data.success) {
          setLeetcodeData(response.data.stats);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
        setLeetcodeError(true);
      } finally {
        setLeetcodeLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  // -----------------------------
  // GitHub activity
  // -----------------------------

  const contributionDays =
    githubData?.contributions?.weeks?.flatMap(
      (week) => week.contributionDays
    ) || [];

  // -----------------------------
  // LeetCode activity
  // -----------------------------

  const leetcodeActivity = leetcodeData?.activity || [];

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#02080e] py-20 sm:py-24"
    >
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff66 1px, transparent 1px),
            linear-gradient(90deg, #00ff66 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-14"
        >
          <p className="mb-3 font-mono text-sm text-[#00ff66]">
            05 // Activity
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Coding <span className="text-[#00ff66]">Activity</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Real-time activity from my GitHub and LeetCode profiles.
          </p>
        </motion.div>

        {/* GitHub + LeetCode */}

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

          {/* =====================================================
              GITHUB CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#071018]/80 p-4 backdrop-blur-xl sm:p-7"
          >
            {/* Header */}

            <div className="mb-6 flex min-w-0 items-center justify-between gap-3 sm:mb-7">
              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00ff66]/20 bg-[#00ff66]/5 sm:h-11 sm:w-11">
                  <FaGithub className="text-lg text-[#00ff66] sm:text-xl" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    GitHub
                  </h3>

                  <p className="truncate font-mono text-[11px] text-gray-500 sm:text-xs">
                    @{githubData?.profile?.username || "loading"}
                  </p>
                </div>

              </div>

              <a
                href={
                  githubData?.profile?.profileUrl ||
                  "https://github.com/adityagupta6393"
                }
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="shrink-0 rounded-lg border border-white/10 p-2 text-gray-400 transition hover:border-[#00ff66]/30 hover:text-[#00ff66]"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Stats */}

            <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-3">

              {/* Repositories */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <Code2
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {githubLoading
                    ? "..."
                    : githubData?.profile?.publicRepos ?? "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Repositories
                </p>
              </div>

              {/* Contributions */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <GitCommit
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {githubLoading
                    ? "..."
                    : githubData?.contributions?.total ?? "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Contributions
                </p>
              </div>

              {/* Stars */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <Star
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {githubLoading
                    ? "..."
                    : githubData?.totalStars ?? "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Stars
                </p>
              </div>
            </div>

            {/* GitHub Graph */}

            <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20 p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-gray-400">
                  Contribution Activity
                </p>

                <p className="shrink-0 font-mono text-xs text-[#00ff66]">
                  {githubData?.contributions?.total ?? "—"} total
                </p>
              </div>

              {githubLoading ? (
                <div className="flex h-28 items-center justify-center font-mono text-xs text-gray-500">
                  Loading contribution graph...
                </div>
              ) : githubError ? (
                <div className="flex h-28 items-center justify-center font-mono text-xs text-red-400">
                  Failed to load GitHub activity.
                </div>
              ) : (
                <div className="w-max min-w-[620px]">
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {contributionDays.map((day) => (
                      <div
                        key={day.date}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                        className={`aspect-square w-3 rounded-[2px] border border-white/[0.03] transition-transform hover:scale-125 ${getActivityColor(
                          day.contributionCount
                        )}`}
                      />
                    ))}
                  </div>

                  {/* Legend */}

                  <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] text-gray-600">
                    <span>Less</span>

                    <span className="h-3 w-3 rounded-[2px] bg-white/[0.03]" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/20" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/40" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/60" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]" />

                    <span>More</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* =====================================================
              LEETCODE CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#071018]/80 p-4 backdrop-blur-xl sm:p-7"
          >
            {/* Header */}

            <div className="mb-6 flex min-w-0 items-center justify-between gap-3 sm:mb-7">
              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00ff66]/20 bg-[#00ff66]/5 sm:h-11 sm:w-11">
                  <Trophy
                    className="text-[#00ff66]"
                    size={20}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    LeetCode
                  </h3>

                  <p className="truncate font-mono text-[11px] text-gray-500 sm:text-xs">
                    @{leetcodeData?.username || "loading"}
                  </p>
                </div>

              </div>

              <a
                href="https://leetcode.com/u/AdityaGupta6393/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LeetCode profile"
                className="shrink-0 rounded-lg border border-white/10 p-2 text-gray-400 transition hover:border-[#00ff66]/30 hover:text-[#00ff66]"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Stats */}

            <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-3">

              {/* Problems Solved */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <Code2
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {leetcodeLoading
                    ? "..."
                    : leetcodeData?.totalSolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Problems Solved
                </p>
              </div>

              {/* Contest Rating */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <Trophy
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {leetcodeLoading
                    ? "..."
                    : leetcodeData?.rating || "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Contest Rating
                </p>
              </div>

              {/* Max Streak */}

              <div className="min-w-0 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4">
                <Flame
                  size={17}
                  className="mb-3 text-[#00ff66]"
                />

                <p className="truncate text-lg font-bold text-white sm:text-xl">
                  {leetcodeLoading
                    ? "..."
                    : leetcodeData?.maxStreak ?? "—"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Max Streak
                </p>
              </div>
            </div>

            {/* LeetCode Graph */}

            <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20 p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-gray-400">
                  Problem Solving Activity
                </p>

                <p className="shrink-0 font-mono text-xs text-[#00ff66]">
                  Last 365 days
                </p>
              </div>

              {leetcodeLoading ? (
                <div className="flex h-28 items-center justify-center font-mono text-xs text-gray-500">
                  Loading LeetCode activity...
                </div>
              ) : leetcodeError ? (
                <div className="flex h-28 items-center justify-center font-mono text-xs text-red-400">
                  Failed to load LeetCode activity.
                </div>
              ) : (
                <div className="w-max min-w-[620px]">
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {leetcodeActivity.map((day) => (
                      <div
                        key={day.date}
                        title={`${day.submissionCount} submissions on ${day.date}`}
                        className={`aspect-square w-3 rounded-[2px] border border-white/[0.03] transition-transform hover:scale-125 ${getActivityColor(
                          day.submissionCount
                        )}`}
                      />
                    ))}
                  </div>

                  {/* Legend */}

                  <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] text-gray-600">
                    <span>Less</span>

                    <span className="h-3 w-3 rounded-[2px] bg-white/[0.03]" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/20" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/40" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]/60" />
                    <span className="h-3 w-3 rounded-[2px] bg-[#00ff66]" />

                    <span>More</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Terminal */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs sm:mt-10 sm:p-5 sm:text-sm"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>

          <p className="text-gray-500">
            <span className="text-[#00ff66]">
              aditya@portfolio
            </span>
            :~$
          </p>

          <p className="mt-2 text-gray-300">
            fetching github.activity...
          </p>

          <p className="text-gray-300">
            fetching leetcode.activity...
          </p>

          <p className="mt-2 text-[#00ff66]">
            ✓ activity synchronized successfully
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;