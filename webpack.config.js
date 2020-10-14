const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //react is single page app index.html and content render dynamically to achive this we use --> html-webpack-plugin

module.exports = {
  entry: "./src/index.js", //starting point of application
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    //publicPath : /app/ when we uplaod project at that time this comes into picture
  }, //Output: producation time what is our file name and where it be created
  module: {
    rules: [
      {
        test: /\.js$/, //tell webpack to look for all .js files
        exclude: /node_modules/, //excluding the files inside node_modules for the purpose of transpiling ES5, ES6 codes
        use: {
          loader: "babel-loader", //webpack use babel-loader for the above purpose
        },
      },
    ], //Rules: these are the rules which bind with webpack
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
