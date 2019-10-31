const axios = require("axios");
require("dotenv").config();

exports.handler = function(event, context, callback) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const url = `https://api.airtable.com/v0/appemKlsSSYmto60q/Events?api_key=${apiKey}`;

  // Send Response

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };
  // Perform API Call
  const getDates = () => {
    axios
      .get(url)
      .then(res => send(res.data))
      .catch(err => send(err));
  };

  // Make sure Method is "GET"
  if (event.httpMethod == "GET") {
    getDates();
  }
};
