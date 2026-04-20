// const http = require("node:http");
const fs = require("node:fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("./site/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./site/about.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("./site/contact.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.use((req, res, next) => {
  fs.readFile("./site/404.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Original Code:
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");

//   let path = "./site/";

//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact":
//       path += "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(8080, () => {
//   console.log("Listening on port 8080");
// });
