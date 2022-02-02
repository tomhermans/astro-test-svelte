// import { h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import {utils, shuffle, getRandomInt} from "../utils/utils";

// let shuffled = shuffle(options.map(option => option.value));
// console.log(shuffled)

// let number = utils.norm(20, 1, 100);
  
export default function MyComponent(props) {
  const color = 'red'
  
  let number = utils.norm(20, 1, getRandomInt(0, 100));
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
    
  return (
    <div class="box">
      My name is {props.name} {options[getRandomInt(0, 3)].value}. <br />
      {number}
      <br />
      <div class="box">

      </div>
    </div>
  );
}

// // Select component
// import { h, Component } from "preact";
// // import Select from "preact-material-components/Select";
// // import "preact-material-components/Select/style.css";

// // const MyComponent = () => <Select options={options} />;

// // import { useState } from "react";

// export default function mySelect() {
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const [count, setCount] = useState(0);
//   const add = () => setCount((i) => i + 1);
//   const subtract = () => setCount((i) => i - 1);

//   return (
//     <div id="react" className="counter">
//       <button onClick={subtract}>-</button>
//       <pre>React: {count}</pre>
//       <button onClick={add}>+</button>
//     </div>
//   );
// }
