const parent = React.createElement(
  "div",
  { id: "parent" },[  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I Love Naruto"),
    React.createElement("h2", {}, "I also Love Light Yagami"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I Love Naruto"),
    React.createElement("h2", {}, "I also Love Light Yagami"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
