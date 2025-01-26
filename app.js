import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const jsxHeading = (
  <h1 className="heading" tabIndex={5}>
    Namaste React Using JSX
  </h1>
);

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
