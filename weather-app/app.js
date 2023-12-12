const request = require("request");

const BASE_URL = "http://api.weatherstack.com/";

const ACCESS_KEY = "02cba700ae7e0b9c9edd3a208e90b1c5";

request(
  {
    url: `${BASE_URL}/current`,
    qs: {
      access_key: ACCESS_KEY,
      query: "New York",
    },
    json: true,
  },
  (error, response) => {
    console.log("David Vo 🚀 ~> response:", response);
    // console.log("David Vo 🚀 ~> error:", error);
  }
);
