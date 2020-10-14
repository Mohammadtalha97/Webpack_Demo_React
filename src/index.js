import React from "react";

import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("app"));
//render() function is defined in package react-dom , which is responsible for rendering components in the browser
//This line tells react-domto render the component <App/>in a DOM element with id="root"
