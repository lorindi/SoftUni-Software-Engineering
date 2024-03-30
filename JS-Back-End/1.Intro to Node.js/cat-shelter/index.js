const http = require('http');
const { homeTemplate, catTemplate } = require('./views/home/index');
const siteCss = require('./content/styles/site');
const addBreedHtml = require('./views/addBreed');

const cats = [
    {
        id: 1,
        name: 'Navcho',
        breed: 'Persian',
        description: 'Very cute cat',
    },
    {
        id: 2,
        name: 'Mishi',
        breed: 'Angora',
        description: 'Fluffy cat',
    },
    {
        id: 3,
        name: 'Garry',
        breed: 'Angora',
        description: 'Fat cat',
    },
];

const server = http.createServer(async (req, res) => {
    console.log(req.url);

    if (req.url == '/') {

        
        const catsHtml = cats.map(cat => catTemplate.replace('{{catName}}', cat.name));
        const homeHtml = homeTemplate.replace('{{cats}}', catsHtml);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeHtml);
    } else if (req.url == '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
    } else if (req.url == '/cats/add-breed') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addBreedHtml);
    }

    res.end();
});

server.listen(5000, () => console.log('This server is running on port 5000...'));
