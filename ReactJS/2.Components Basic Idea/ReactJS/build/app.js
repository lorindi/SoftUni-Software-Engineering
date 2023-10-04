var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);
// const headingElement = React.createElement("h1", {}, "Hello from React!");
// const secondHeadingElement = React.createElement("h2", {}, "Some slogan here!");
// const headerElement = React.createElement(
//   "header",
//   {},
//   headingElement,
//   secondHeadingElement
// );
var Heading = function Heading(props) {
  return React.createElement(
    "h1",
    { className: "heading" },
    "Hello from ",
    props.title,
    "!"
  );
};

var headerElement = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    null,
    React.createElement(Heading, { title: "React" }),
    React.createElement(
      "h2",
      null,
      "Slogan here"
    ),
    React.createElement(
      "p",
      null,
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore magni incidunt excepturi harum maxime nemo, quia qui blanditiis cum in, iste vitae quam aut unde corrupti alias similique asperiores? Iusto."
    )
  ),
  React.createElement(
    "button",
    null,
    "Click"
  )
);
root.render(headerElement);