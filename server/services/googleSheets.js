const { google } = require("googleapis");
const credentials = require("../config/credentials.json"); // Downloaded from Google Cloud Console

const readGoogleSheet = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1", // Name of the sheet
  });

  return response.data.values;
};

module.exports = readGoogleSheet;
