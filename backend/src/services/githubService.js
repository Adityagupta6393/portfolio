// const axios = require('axios');

// const GITHUB_USERNAME = process.env.GITHUB_USERNAME;


// const githubProfile = async () => {
//     const response = await axios.get(
//         `https://api.github.com/users/${GITHUB_USERNAME}`
//     );

//     return response.data;
// }

// const githubRepositories = async () => {
//     const response = await axios.get(
//         `https://api.github.com/users/${GITHUB_USERNAME}/repos`
//     );
//     return response.data;
// }

// const getGithubContributions = async () => {
//   const query = `
//     query($username: String!) {
//       user(login: $username) {
//         contributionsCollection {
//           contributionCalendar {
//             totalContributions
//             weeks {
//               contributionDays {
//                 date
//                 contributionCount
//                 color
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const response = await axios.post(
//     "https://api.github.com/graphql",
//     {
//       query,
//       variables: {
//         username: GITHUB_USERNAME
//       }
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         "Content-Type": "application/json"
//       }
//     }
//   );

//   if (response.data.errors) {
//     throw new Error(response.data.errors[0].message);
//   }

//   return response.data.data.user.contributionsCollection
//     .contributionCalendar;
// };

// module.exports = {
//     githubProfile,
//     githubRepositories,
//     getGithubContributions
// };

const axios = require("axios");

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const githubProfile = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "GitHub Profile Error:",
      error.response?.status,
      error.response?.data
    );

    throw error;
  }
};

const githubRepositories = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        params: {
          per_page: 100,
          sort: "updated",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "GitHub Repository Error:",
      error.response?.status,
      error.response?.data
    );

    throw error;
  }
};

const getGithubContributions = async () => {
  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await axios.post(
      "https://api.github.com/graphql",
      {
        query,
        variables: {
          username: GITHUB_USERNAME,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.user.contributionsCollection
      .contributionCalendar;
  } catch (error) {
    console.error(
      "GitHub Contributions Error:",
      error.response?.status,
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = {
  githubProfile,
  githubRepositories,
  getGithubContributions,
};