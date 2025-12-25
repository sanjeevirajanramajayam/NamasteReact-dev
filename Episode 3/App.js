import React from "react";
import ReactDOM from "react-dom/client";
//JSX

const element = (<h1>Hello World</h1>) // This a react element

const Component = () => {
  return <div>
    {element}
  </div>
} // use {} to render react elements`

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />); // Render Componenents like this.