const path = require('path'); // CommonJS

module.exports = {
     mode: 'development',
     entry: './frontend/index.js',
     output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'public', 'assets', 'js')
     },
     module: {
          rules: [{
               exclude: /node_modules/,
               test: /\.js$/,
               use: {
                    loader: 'babel-loader',
                    options: {
                         presets: ['@babel/env'],
                         
                    }
               }
          },{
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
          }]
     },
     devtool: 'source-map'
};
