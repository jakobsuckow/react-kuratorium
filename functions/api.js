require("dotenv").config();
const express = require("express");
const GoogleSpreadsheet = require("google-spreadsheet");
// const creds = require("./client_secret.json");
const serverless = require("serverless-http");
const sheetId = process.env.SHEETID;

const creds = {
  type: "service_account",
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
};

const app = express();
app.use(express.json())

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Hello: "Hi"
  });
});

router.post("/submit-form", function(req, res) {
  const doc = new GoogleSpreadsheet(sheetId);

  doc.useServiceAccountAuth(creds, function(err) {
    doc.addRow(
      1,
      {
        date: "=TODAY()",
        email: JSON.stringify(req.body)
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
