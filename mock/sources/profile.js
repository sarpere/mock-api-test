const { faker } = require("@faker-js/faker");
const { genDataWithBody } = require("../utils/genData");

const body = (id) => ({
  id: faker.string.uuid(),
  fullname: faker.person.fullName(),
  lastname: faker.person.lastName(),
  firstname: faker.person.firstName(),
  title: faker.helpers.arrayElement(["Web dev", "Tester", "Mobil Dev"]),
});
module.exports = genDataWithBody(5, body);
