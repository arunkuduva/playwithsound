var fs = require("fs");
var async = require("async");

var merge = (request, response, next) => {
  async.eachSeries(
    // Pass items to iterate over
    response.locals.listofaudiofiles,
    // Pass iterator function that is called for each item
    function(filename, cb) {
      fs.readFile(filename, function(err, content) {
        if (!err) {
          fs.appendFileSync("derived.ogg", content);
        }
        cb(err);
      });
    },
    // Final callback after each item has been iterated over.
    function(err) {
      next();
    }
  );
};

module.exports = merge;
