import { useEffect, useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // I wanted to log for every click/interaction
  // useEffect(() => {
  //   console.log(count);
  // });

  // Initial API call, load configuration, authentication, etc.
  useEffect(() => {
    console.log("only once", count);
  }, []); // Empty dependency array

  return (
    <>
      Count is: {count}

      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Hooks;