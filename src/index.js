import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// const people = [
//   { name: "Tyler" },
//   {
//     name: "Karen"
//   },
//   {
//     name: "Richard"
//   }
// ];
// const element = (
//   <ol>
//     {people.map(person => (
//       <li>{person.name}</li>
//     ))}
//   </ol>
// );

class ContactList extends React.Component {
  render() {
    const people = [
      { name: "Tyler" },
      {
        name: "Karen"
      },
      {
        name: "Richard"
      }
    ];
    return (
      <ol>
        {people.map(person => (
          <li key={person.name} className="red">
            {person.name}
          </li>
        ))}
      </ol>
    );
  }
}

// console.log(element);

const rootElement = document.getElementById("root");
ReactDOM.render(<ContactList />, rootElement);
