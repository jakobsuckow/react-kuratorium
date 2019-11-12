const express = require("express");
const GoogleSpreadsheet = require("google-spreadsheet");
const creds = require("./client_secret.json");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Hello: "Hi"
  });
});

router.get("/submit-form", function(req, res) {
  const doc = new GoogleSpreadsheet(sheetId);

  doc.useServiceAccountAuth(creds, function(err) {
    doc.addRow(
      1,
      {
        date: "=NOW()",
        email: "netlify-test-email"
      },
      callback
    );

    function callback(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }
  });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
