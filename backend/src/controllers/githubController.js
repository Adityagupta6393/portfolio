const { githubProfile, githubRepositories, getGithubContributions } = require("../services/githubService.js");

const getGithubData = async (req, res) => {

    try {

        const profile = await githubProfile();

        const repositories = await githubRepositories();

        const contributions = await getGithubContributions();

        const totalStars = repositories.reduce((total, repo) => {
            return total + repo.stargazers_count;
        }, 0);

        res.json({
            success: true,

            profile: {
                username: profile.login,
                name: profile.name,
                avatar: profile.avatar_url,
                bio: profile.bio,
                followers: profile.followers,
                following: profile.following,
                publicRepos: profile.public_repos,
                profileUrl: profile.html_url
            },

            repositories: repositories.map(repo => ({
                name: repo.name,
                description: repo.description,
                language: repo.language,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                url: repo.html_url
            })),

            totalStars,

            contributions: {
                total: contributions.totalContributions,
                weeks: contributions.weeks
            }
        });

    } catch (error) {
        console.error("GitHub API Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch GitHub data"
        });
    }
};

module.exports = {
    getGithubData
};