require('dotenv').config()
const express = require("express");
const GoogleSpreadsheet = require("google-spreadsheet");
// const creds = require("./client_secret.json");
const serverless = require("serverless-http");
const sheetId = process.env.SHEETID

const creds = {
    type: "service_account",
    project_id: "gsheets-258811",
    private_key_id: "2780248fef3c17348d29b2a5c40d14f0edcb893e",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuz0DL/pq/uh1j\nl7/ajagEKU9bRmr2MvKsu9yLQFLT8q8QXHpywO7ghXxY7Ddh4zDgYDSsT9jwxMzb\ncbn91PjkRDTTu8xJRvZGSRzZA0I7g9kwSpgUS7qDhG91UMorxQbayEUQf+7iOsBM\nRWEk4JK90uAqRPru79uJnykL3991ttnwhjQWDWS+SZUsgHhLIPodyJQo4IBSFx3f\nzp3NAU7r6F5C998EmwSCwSxhTIiIlH1VDvMgjqJ1JbAxdb4Q+qyuQ/X3BQD4oolF\n7BMD8i86fEQaQql0WRpAgr/56cGI+EjVVRhPSkKeYB2CcNq5WdwaaTuuXplYPXmU\nOglTG2CdAgMBAAECggEABb0hE/FaVDQAdf4L2tlurCBNDiKMLWPzyo7qSRoF/hZI\nAAIBNRY3YWCQefzbPpfuSVdvMz710MWtMgEUSYx91USV9WODa95sBFevHkK4oGqO\nLUMtpfDsgRfObuwFjxVLSdBsUAPbLEsgeACJFWRX/OpY2JpmIIT4UJbMiqrBU8Rs\nbav1uHzKc7/ywpYZyAApj2t3nQ4PH29AL9rOpcIY3rOmlIlrsFqRT7/pY7/IdOiT\nDEkk6Ylk1kZ8BjJH6ktIgo6rp8ElDBb9FEwr77JoePVWJajBafiO0MknjyugdfMi\nMyILtyzyHXyhVtONdhmGgztnVEv/ERY+kiGEddtx4QKBgQD1K9ubAIhbPuUx0NBj\nCCSp8Mr1SicGc5rdsuHmlv+rH+orCHnYS8AR5InMY5u5tav+8XtGu4GZfNj1+Psy\ngMl/yk6uFSN5n8l8ZYTfFW/QYBh2EOrZXiGDIJqWqUyOyT2MJgZ5SRRAWGhKrvsy\nCesNOt/w9PwGdN7uBPMhrRZiLQKBgQC2h9FmhV2o4CPlaBQ55cQk6g6w9A/mFppH\nxzESw3PaFCfuUBaZlB4JXcIoDE4z8Jd4CjHm+WQWwJNessLBwLcPCzPIdNp4+zN1\nyfG8L+k247GM1Q9XWQgUnWHIxymHCr1HCN/7RavUpmCr7CmIXL0WiDXBgjIpkzHY\nzAJbjniuMQKBgQC/VNfQEk1XsDDbfJN0BaHfQbySSqlD/qooQ/bJpqOmH4T2ymmU\nZCFjlU/4wu9/sYilsDy9iY1thCIpa4JV+m3GHdLjRjnmK83pF6znD+qv2p6cXT16\nH1zV4XbjBwJpGCHBItfAhUiZoqTZS89bUKQwMfccK4QXYdOsOw6nBFZIjQKBgGiD\nSfYOxPsOI9+WAYbJNc8BKZpOlM/k/z+8ITAiM7KZuedtehNDyRMJ2UL/EMQSrVfx\nVnNvNs0ERR2C85rnEqoNev/7UKDXDLcUA1MCh+GC7EW8NQWJl+Pd3YCN8Qw+rPQA\nc+c3FFU1UsL9/SX0G9zL7yO2vawqeO8umOb9o8HxAoGALy92Y+iWADRt1cCmb+Zz\nNS0d4gOVLS6zTYNrLleDfOoeTrZtckHmh0ljCQJHSEgpLH6KD4tfSTYpPbBWZIIZ\nZfO60oe/pkDFhJDhJwfO4t5tgbtLmsFlgdtnl3IK8tnoGP3HjtMOdjZUyoX/BTN4\nqzzIXJfKpkqzcQV4z54yrMw=\n-----END PRIVATE KEY-----\n",
    client_email: "jakobsuckow@gsheets-258811.iam.gserviceaccount.com",
    client_id: "110614153351383157053",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/jakobsuckow%40gsheets-258811.iam.gserviceaccount.com"

}

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
