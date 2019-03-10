const express = require("express");
var path = require("path");
var fs = require("fs");

var merge = require("./merge");
const deleteFile = require("./delete");
const dateAssemble = require("./deriveaudiofilelist");
var filePath = path.join("./music", "derived.ogg");

const app = express();
const port = 3000;

app.get(
  "/",
  dateAssemble,
  merge,
  (req, response, next) => {
    console.log("i am inside 2 nd middleware");
    response.writeHead(200, {
      "Content-Type": "audio/ogg"
      //,"Content-Length": stat.size
    });

    fs.readFile("./derived.ogg", function(err, data) {
      response.write(data);
      response.end();
      next();
    });
  },
  deleteFile
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
