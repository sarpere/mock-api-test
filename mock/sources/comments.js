const { faker } = require("@faker-js/faker");
const { genData } = require("../utils/genData");

module.exports = genData(5, faker.lorem.sentence);
