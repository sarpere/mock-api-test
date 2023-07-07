const { faker } = require("@faker-js/faker");
const { genData } = require("../utils/_genData");

module.exports = genData(5, faker.lorem.sentence);
