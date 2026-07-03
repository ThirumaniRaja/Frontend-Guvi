import { useRef } from "react";

function UserRefDemo() {
  const inputRef = useRef(0)

  const handleClick = () => {
   
      inputRef.current++;
      console.log("Current Value:", inputRef.current);
  };

  return (
    <div>
        <h2>Current Value: {inputRef.current}</h2>
      {/* <input ref={inputRef} type="text" placeholder="Type something..." /> */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default UserRefDemo;