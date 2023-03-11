import {
  addLocation,
  updateLocation,
  getWeatherData,
  deleteLocation,
  getAllCities,
} from "./modules/LocationOperations.mjs";
import http from "http";
import url from "url";

// console.log(addLocation());

// const loc = {
//   country: "India",
//   name: "Kashmir",
//   region: "Kashmir",
// };
// const cur = {
//   feelslikeC: 29.8,
//   tempC: 32,
// };

// addLocation(loc, cur);

// console.log(getAllCities());
// deleteLocation("Kashmir")
// console.log(weatherData);

// const obj = {
//   location: {
//     country: "United Kingdom",
//     name: "London",
//     region: "City of London",
//   },
//   current: { feelslikeC: 12, tempC: 10 },
// };

// updateLocation("London", obj);

const server = http.createServer(function (req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let q = url.parse(req.url, true).query;
    if (q.city !== undefined) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      let data = getWeatherData(q.city);
      if (data !== undefined) {
        res.write(JSON.stringify(data));
        res.end();
      } else {
        res.write("City not found");
        res.end();
      }
    }
  } catch (err) {
    console.log(err);
  }
});

server.listen(5000);
