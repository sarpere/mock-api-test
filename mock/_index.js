const jsonServer = require("json-server");
const server = jsonServer.create();
const createDB = require("./_db.js");
const _ = require("lodash");
const DB = createDB();
const router = jsonServer.router(DB); //the database
const middlewares = jsonServer.defaults({
  bodyParser: true,
});
const PORT = 9898;
//overwrite the router render method.
// this should be done before passing the router to server
router.render = (req, res) => {
  if (_.isEmpty(res.locals.data))
    res.jsonp({
      Message: "Error while retrive data.",
      Success: false,
    });
  res.jsonp({
    Data: res.locals.data,
    Message: "Success",
    Success: true,
  });
};

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running: http://localhost:${PORT}`);
});
