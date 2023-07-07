const { faker } = require("@faker-js/faker");
const { genDataWithBody } = require("../utils/_genData");

const body = (id) => ({
  id: id,
  fullname: faker.person.fullName(),
  lastname: faker.person.lastName(),
  firstname: faker.person.firstName(),
  title: faker.person.jobTitle(),
});
module.exports = genDataWithBody(5, body);
