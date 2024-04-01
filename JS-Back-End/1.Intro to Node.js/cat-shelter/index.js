// const { homeTemplate, catTemplate } = require('./views/home/index');
// const addBreedHtml = require('./views/addBreed');
const siteCss = require("./content/styles/site");
const http = require("http");
const fs = require("fs/promises");

const cats = [
  {
    id: 1,
    name: "Navcho",
    breed: "Persian",
    description: "Very cute cat",
  },
  {
    id: 2,
    name: "Mishi",
    breed: "Angora",
    description: "Fluffy cat",
  },
  {
    id: 3,
    name: "Garry",
    breed: "Angora",
    description: "Fat cat",
  },
];
const replaceData = (html, data) => {
  return Object.keys(data).reduce((result, key) => {
    result = result.replace(`{{${key}}}`, data[key]);
    return result;
  }, html);
};
const server = http.createServer(async (req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    const homeHtml = await fs.readFile("./views/home/index.html", "utf-8");
    const catHtml = await fs.readFile("./views/cat.html", "utf-8");

    const catsHtml = cats.map((cat) => replaceData(catHtml, cat));
    const homeHtmlResult = replaceData(homeHtml, { cats: catsHtml });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeHtmlResult);
  } else if (req.url == "/styles/site.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(siteCss);
  } else if (req.url == "/cats/add-breed") {
    const addBreadHtml = await fs.readFile("./views/addBreed.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(addBreadHtml);
  }

  res.end();
});

server.listen(5000, () =>
  console.log("This server is running on port 5000...")
);
