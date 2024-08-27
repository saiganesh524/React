import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("something happened");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      {/* <h1>Count : {count}</h1>
      <h1>Count1 : {count1}</h1> */}
      <h2>Name : {name}</h2>
      <h3>Location : Repalle</h3>
      <p>Contact @saiganesh524</p>
    </div>
  );
};

export default User;
