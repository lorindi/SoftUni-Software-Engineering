import { useState } from "react";

const getTitle = (count) => {
  // eslint-disable-next-line default-case
  switch (count) {
    case 1:
      return "First Blood";
    case 2:
      return "Double kill";
    case 3:
      return "Triple Kill";
    case 4:
      return "Multi Kill";
    case 5:
      return "Unstoppable";
    default:
      return "Counter";
  }
};

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  //   const onButtonClick = (e) => {
  //     console.log("Clicked");
  //   }

  const onButtonClick = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  const decrementCounterHandler = () => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const clearCounterHandler = () => {
    setCounter(0);
  };

  // const title = getTitle(counter)

  //   let title = "Counter";
  //   if (counter == 1) {
  //     title = "First Blood";
  //   } else if (counter == 2) {
  //     title = "Double kill";
  //   }
  return (
    <div>
      <p
        style={{
          fontSize: Math.max(counter, 0.5) + "em",
        }}
      >
        {counter >= 6 ? "Godlike" : getTitle(counter)}: {counter}
      </p>
      {/* <h3>
        {title}: {counter}
      </h3> */}
      {/* <h3>
        {counter > 0 ? 'First Blood' : "Counter"}: {counter}
      </h3> */}

      <button onClick={decrementCounterHandler}>-</button>
      {props.canReset && <button onClick={clearCounterHandler}>0</button>}
      {counter < 10 ? <button onClick={onButtonClick}>+</button> : null}
    </div>
  );
}
