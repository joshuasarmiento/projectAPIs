// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080;

// server.use(middlewares);
// server.use(router)

// server.listen(port);

const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const fs = require("fs");

const dataDirectory = path.join(__dirname, "data"); // path to the directory containing the JSON files
const files = fs.readdirSync(dataDirectory); // get all files in the directory

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Load all JSON files as resources
const resources = {};
files.forEach((file) => {
  const resource = file.replace(".json", "");
  resources[resource] = require(path.join(dataDirectory, file));
});

const router = jsonServer.router(resources);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});