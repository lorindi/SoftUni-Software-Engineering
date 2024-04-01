// const http = require("http"); и const fs = require("fs");: Тези редове зареждат вградените модули http и fs (file system),
// които са необходими за създаването на HTTP сървър и работа със файловата система.
const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {...});: Тук се създава HTTP сървър,
// като се използва функцията createServer() на модула http. Приема се функция,
// която се изпълнява при всяка заявка към сървъра. Тази функция има два параметъра: req (заявка) и res (отговор).
const server = http.createServer((req, res) => {

  // const readStream = fs.createReadStream("./input.txt", { highWaterMark: 10000 });:
  // Тук се създава четящ поток (ReadStream) от текстовия файл "input.txt" чрез функцията createReadStream() на модула fs.
  // Опционалният параметър { highWaterMark: 10000 } задава големината на буфера по подразбиране за четящия поток.
  const readStream = fs.createReadStream("./input.txt", {
    highWaterMark: 10000,
  });

  //   readStream.on("data", (chunk) => {
  //     res.write(chunk);
  //   });

  //   readStream.on("end", () => {
  //     res.end();
  //   });


//   readStream.pipe(res): Тази команда свързва изходния поток от файловата система (readStream) с изходния поток на HTTP отговора (res). 
//   Това означава, че данните, които се четат от файла, ще се изпращат директно към HTTP отговора към клиента.
  readStream.pipe(res);
});

// server.listen(5000, () => console.log('server is listening ot port 5000...')): С този ред се стартира сървърът да слуша на порт 5000. 
// Когато сървърът бъде стартиран успешно, ще се изпълни функцията подадена втори параметър, в случая изпринтване на съобщение в конзолата.
server.listen(5000, () => console.log("server is listening ot port 5000..."));

// node .\webServer.js
