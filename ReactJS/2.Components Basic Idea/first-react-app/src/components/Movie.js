export default function Movie(props) {
  // console.log(props.isNew)
  // console.log(props.cast)
  
  // let render = 0
  // console.log(`Render Movie - ${render++}`);


  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <ul>
        <li>{props.cast[0]}</li>
        <li>{props.cast[1]}</li>
      </ul>
    </article>
  );
}
