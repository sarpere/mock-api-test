const _ = require("lodash");
const defaultBody =
  (fakeDatafn = () => {}) =>
  (_, idx) => ({
    id: idx + 1,
    data: fakeDatafn(),
  });

const genData = (length, fakeDatafn = () => {}) => {
  return Array.from({ length }, defaultBody(fakeDatafn));
};

const genDataWithBody = (length, dataBody = () => {}) => {
  return Array.from({ length }, (_, idx) => dataBody(idx + 1));
};

module.exports = { genData, genDataWithBody };
