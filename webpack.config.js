const path = require('path');

module.exports = {
  mode: 'production',
  entry: {

  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
