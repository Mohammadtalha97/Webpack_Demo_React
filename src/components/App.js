import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
      </div>
    );
  }
}

export default App;
//const App- is a function that returns the “Hello world” within a div
//(FYI: This XML looking weird code inside JS function is called JSX syntax if its your first time with React.js)
//which gets rendered in <div id="root"></div> defined in c:\app\src\index.html.

//------------------------------------
//npm run dev
//npm install --save-dev babel-loader@^7[npm uninstall @babel/core && babel-loader ]

//webpack: The main webpack plugin as an engine for its dependents.
//webpack-cli: To access some webpack commands through CLI like starting dev server, creating production build, etc.
//webpack-dev-server: A minimal server for client-side development purpose only.
//html-webpack-plugin: Will help in creating HTML templates for our application.

//create- .babelrc:
//This is the configuration file babel looks up for.
//Remember we had 2 babel presets installed in : babel-preset-env,babel-preset-react
//Those presets should be mentioned here for Babel to know.

//package.json
//"start": "webpack-dev-server --mode development --open --hot",
//This says: If we trigger npm start , webpack-dev-server is going to fire up the application in mode=development, then display ( — open) it in your default browser automatically and keep watching for any changes made to the application ( — hot).

//When npm run build is triggered, use webpack to create a production-ready build in c:\app\dist directory. Done!
