import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

const stylecard = {
  backgroundColor: "#f0f0f0",
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// Hello world



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

return <div>Hello world</div>

