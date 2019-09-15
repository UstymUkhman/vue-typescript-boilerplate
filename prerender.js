const fs = require('fs');
const config = require('./package.json');

if (!config.multilanguage) {
  fs.unlinkSync('./dist/app.html');
} else {
  fs.unlinkSync('./dist/index.html');
  fs.renameSync('./dist/app.html', './dist/index.html');
}
