const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// const headingElement = React.createElement("h1", {}, "Hello from React!");
// const secondHeadingElement = React.createElement("h2", {}, "Some slogan here!");
// const headerElement = React.createElement(
//   "header",
//   {},
//   headingElement,
//   secondHeadingElement
// );

const headerElement = (
  <div>
    <header>
      <h1 className="title">Hello from React!</h1>
      <h2>Slogan here</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore magni
        incidunt excepturi harum maxime nemo, quia qui blanditiis cum in, iste
        vitae quam aut unde corrupti alias similique asperiores? Iusto.
      </p>
    </header>
    <button>Click</button>
  </div>
);
root.render(headerElement);
