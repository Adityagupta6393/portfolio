const {
  getLeetCodeStats,
} = require("../services/leetcodeService");

const getLeetCodeData = async (req, res) => {
  try {
    const stats = await getLeetCodeStats();

    res.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error(
      "LeetCode API Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch LeetCode data",
    });
  }
};

module.exports = {
  getLeetCodeData,
};