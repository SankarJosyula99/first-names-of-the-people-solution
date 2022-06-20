const peopleNames = require("../country/state/city/index.js");
const utilityFunction = require("../utilities/utils/index.js");
const getPeopleInCity = (peopleNames) => {
  return utilityFunction(peopleNames);
};
module.exports = getPeopleInCity;
