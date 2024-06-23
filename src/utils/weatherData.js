const request = require("request");

const OpenWeatherMap = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?",
  SECRET_KEY: "8d6dbb86dc4b2e2aa51c3dfeb9565bf0 ",
};

const weatherData = (address, callback) => {
  const url =
    OpenWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&appid=" +
    OpenWeatherMap.SECRET_KEY;
    console.log(url)
    request({ url, json: true }, (error, data) => {
        if (error) {
            callback(true,"Unable to connect to the weather service, please try again later.");
        } else if (data.body.error) {
            callback(true, "Unable to find the location, please try another search.");
        } else {
            callback(false, data?.body);
        }
    });
};

module.exports = weatherData;