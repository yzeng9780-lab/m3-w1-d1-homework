var http = require("http");
var path = require("path");
var fs = require("fs");

var port = 5000;

var server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    const filePath = path.resolve("./public/home.html");
    fs.access(filePath, function (err) {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(
          `<html><body><h1>Error 404: ${req.url} not found</h1></body></html>`,
        );
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
    });
  } else if (req.url === "/about") {
    const filePath = path.resolve("./public/about.html");
    fs.access(filePath, function (err) {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(
          `<html><body><h1>Error 404: ${req.url} not found</h1></body></html>`,
        );
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
    });
  } else if (req.url === "/contact") {
    const filePath = path.resolve("./public/contact.html");
    fs.access(filePath, function (err) {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(
          `<html><body><h1>Error 404: ${req.url} not found</h1></body></html>`,
        );
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Invalid Request!</h1></body></html>");
  }
});

server.listen(port, () => {
  console.log(`The NodeJS server on port ${port} is now running....`);
});
