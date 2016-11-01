var fs = require('fs');
var umdify = require('umdify');
var path = require('path');
var glob = require('glob');

var exports = module.exports = {
  modifyFile: function(filepath) {
    var files = glob.sync(filepath);
    console.log("going to modify files", files);
    files.forEach(function(file) {
      console.log("umdifying file", file);
      var contents = fs.readFileSync(file, 'utf8');
      contents = umdify(contents);
      // var dest = path.join('dist', file.replace(/^src\//, ''));
      fs.writeFileSync(file, contents);
    });

    console.log("done!");
  }
}
