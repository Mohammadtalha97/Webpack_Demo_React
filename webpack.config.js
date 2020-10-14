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
          loader: "babel-loader", //webpack use babel-loader so that is not all browser support ES6 so it translate the code into vanila JS so that browser can undestand
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

//we require babel because webpack can merge all data into 1 single file but it will not translate the code into vanila js
// for example : we have written like const obj = "talha" so webpack put as it is in bundle.js but we need to change it like "var" so we use babel-loader and preset for that
//babel-preset means what need to transform in vanila js
