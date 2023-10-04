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
const Heading = (props) => {
  return <h1 className="heading">Hello from {props.title}!</h1>
}

const headerElement = (
  <div>
    <header>
      <Heading title="React"/>
      {/* <Heading title="Second"/>
      <Heading title="Third"/> */}

      

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
