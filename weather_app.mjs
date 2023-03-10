import {
  addLocation,
  updateLocation,
  getWeatherData,
  deleteLocation,
  getAllCities,
} from "./modules/LocationOperations.mjs";

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

const obj = {
  location: {
    country: "United Kingdom",
    name: "London",
    region: "City of London",
  },
  current: { feelslikeC: 12, tempC: 10 },
};

updateLocation("London", obj);
