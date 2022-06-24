import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import $ from "jquery";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap/js/dist/base-component.js";

// import "./js/off-canvas.js";
// import "js/hoverable-collapse.js";
// import "./js/template.js";
// import "./js/settings.js";
// import "./js/todolist.js";

// import "vendors/bootstrap-datepicker/bootstrap-datepicker.min.js";
// import "vendors/progressbar.js/progressbar.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
