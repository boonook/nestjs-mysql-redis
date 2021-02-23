const path = require('path');
const glob = require('glob');
module.exports = {
  entry:glob.sync('./public/*'),
  output:{
    path:path.resolve(__dirname,'dist/public'),
  }
};
