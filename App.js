import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>I'm a react element</span>;

const element = (
  <div id="">
    <h1>{elem} Hello, World!</h1>
    <p>This is a React Element.</p>
  </div>
);

const Title = () => (
  <div id="">
    <h1>Hello, World!</h1>
    <p>This is a React Component.</p>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    {element}
    <Title />
    <h1 id="" className="heading">
      React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
