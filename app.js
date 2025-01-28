import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

// Everything in the React are Components,

const HeadingComponent = () => {
 return (
    <div id="container">
     <h1 className="heading">Shiva Nigam is My name</h1>
    </div>
  );
  
}

console.log(HeadingComponent);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

