const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const addContactMessage = async ({
  name,
  email,
  subject,
  message,
}) => {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Messages!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          name,
          email,
          subject,
          message,
          new Date().toISOString(),
        ],
      ],
    },
  });
};

module.exports = {
  addContactMessage,
};