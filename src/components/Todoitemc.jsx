import React from "react";

function Todoitemc(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default Todoitemc;

// import React from "react";

// function Todoitemc(props) {
//   const [isDone, set] = React.useState(false);

//   function change() {
//     set((prev) => {
//       return !prev;
//     });
//   }

//   return (
//     <li
//       onClick={change}
//       style={{ textDecoration: isDone ? "line-through" : "none" }}
//     >
//       {props.text}
//     </li>
//   );
// }

// export default Todoitemc;
