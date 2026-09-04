const axios = require("axios");

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME;

const getLeetCodeStats = async () => {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
        }

        submissionCalendar
      }

      userContestRanking(username: $username) {
        rating
        globalRanking
        attendedContestsCount
      }
    }
  `;

  const response = await axios.post(
    "https://leetcode.com/graphql",
    {
      query,
      variables: {
        username: LEETCODE_USERNAME,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com/",
      },
    }
  );

  if (response.data.errors) {
    throw new Error(response.data.errors[0].message);
  }

  const data = response.data.data;

  if (!data.matchedUser) {
    throw new Error("LeetCode user not found");
  }

  // -----------------------------
  // Problems solved
  // -----------------------------

  const submissions =
    data.matchedUser.submitStatsGlobal.acSubmissionNum;

  const totalSolved =
    submissions.find(
      (item) => item.difficulty === "All"
    )?.count || 0;

  const easySolved =
    submissions.find(
      (item) => item.difficulty === "Easy"
    )?.count || 0;

  const mediumSolved =
    submissions.find(
      (item) => item.difficulty === "Medium"
    )?.count || 0;

  const hardSolved =
    submissions.find(
      (item) => item.difficulty === "Hard"
    )?.count || 0;

  // -----------------------------
  // Submission calendar
  // -----------------------------

  const calendar = JSON.parse(
    data.matchedUser.submissionCalendar || "{}"
  );

  const activityMap = {};

  Object.entries(calendar).forEach(
    ([timestamp, count]) => {
      const date = new Date(
        Number(timestamp) * 1000
      )
        .toISOString()
        .split("T")[0];

      activityMap[date] = count;
    }
  );

  // -----------------------------
  // Last 365 days
  // -----------------------------

  const activity = [];

  for (let i = 364; i >= 0; i--) {
    const date = new Date();

    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - i);

    const dateString = date
      .toISOString()
      .split("T")[0];

    activity.push({
      date: dateString,
      submissionCount: activityMap[dateString] || 0,
    });
  }

  // -----------------------------
  // Calculate maximum streak
  // -----------------------------

  let currentStreak = 0;
  let maxStreak = 0;

  for (const day of activity) {
    if (day.submissionCount > 0) {
      currentStreak++;

      maxStreak = Math.max(
        maxStreak,
        currentStreak
      );
    } else {
      currentStreak = 0;
    }
  }

  // -----------------------------
  // Return data
  // -----------------------------

  return {
    username: LEETCODE_USERNAME,

    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,

    rating: Math.round(
      data.userContestRanking?.rating || 0
    ),

    globalRanking:
      data.userContestRanking?.globalRanking || null,

    contestsAttended:
      data.userContestRanking?.attendedContestsCount || 0,

    ranking:
      data.matchedUser.profile?.ranking || null,

    maxStreak,

    activity,
  };
};

module.exports = {
  getLeetCodeStats,
};