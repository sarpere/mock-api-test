const { faker } = require("@faker-js/faker");

const createComments = (_, idx) => ({
  id: idx + 1,
  body: faker.lorem.sentence(),
  postId: 1,
});

module.exports = Array.from({ length: 5 }, createComments);
