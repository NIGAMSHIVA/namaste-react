import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const Heading = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX 🚀
  </h1>
);

// Everything in the React are Components,

const HeadingComponent = () => {
 return (
   <div id="container">
     <Heading />
     <h1 className="heading">Namaste react functional Component</h1>
    </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

