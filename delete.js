var fs = require("fs");

var deleteFile = () => {
  fs.unlink("./derived.ogg", function(err) {
    if (err) return console.log(err);
  });
};

module.exports = deleteFile;

//deleteFile();
