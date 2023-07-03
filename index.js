const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router({
  "/portfolioEmployment": path.join(__dirname, "data/portfolio/employment.json"),
  "/portfolioM-mySkills": path.join(__dirname, "data/portfolio/mySkills.json"),
  "/portfolioProject": path.join(__dirname, "data/portfolio/project.json"),
  "/reactBlogStarter": path.join(__dirname, "data/react-blog-starter/blogs.json"),
});

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
