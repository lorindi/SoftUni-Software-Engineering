import React from "react";
export default function Timer(props) {
  // X
  //     return(
  // <div>
  //     Timer: {props.start}s
  // </div>
  //     );

  // X
  //   console.log("render Timer");
  //   let seconds = props.start;
  //   setTimeout(() => {
  //     console.log("setTimeout");
  //     seconds++;
  //   }, 1000);
  //   return (<div>Timer: {seconds}s</div>);

  // X
  // const stateResult = React.useState()

  // React.useState() -> масив
  // stateResult[0] -> value
  // stateResult[1] -> function
  // const [seconds, setSeconds] = React.useState(0)
  //   console.log("seconds -", seconds);

  //   setTimeout(() => {
  //     setSeconds(6);
  //   }, 1000);
  //   return (<div>Timer: {seconds}s</div>);

  const [seconds, setSeconds] = React.useState(props.start);
  console.log("seconds -" + seconds);

  setTimeout(() => {
    // setTimeout(() => {

    //   if (seconds >= 10) {
    //     setSeconds(0);
    //   } else {
    //     setSeconds((state) => state + 1);
    //   }
    // }, 1000);

    // X
    // setSeconds(seconds + 1);

    // setSeconds((state) => state + 1);
    setSeconds((state) => state + 1);
  }, 1000);

  return (
    <div>
      <h2>Timer</h2>
      Timer: {seconds}s
    </div>
  );
}
