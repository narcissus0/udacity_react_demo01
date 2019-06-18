import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// 方式一
// const element = React.createElement('ol',{className:'red'},
//     React.createElement('li',null,'a'),
//     React.createElement('li',null,'b')
// )

// 方式二
const people = [
  { name: "Tyler" },
  {
    name: "Karen"
  },
  {
    name: "Richard"
  }
];
const element = React.createElement(
  "ol",
  { className: "red" },
  people.map(person =>
    React.createElement(
      "li",
      { className: "red", key: person.name },
      person.name
    )
  )
);

console.log(element);

const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);
