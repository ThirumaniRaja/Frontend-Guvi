import Title from "./components/Title";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import { useCallback, useState } from "react";

function App() {

  // state variables for count and age

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
      <Title />

      <Count Count={count} />
      <br></br>

      <CountBtn handleCount={handleCount} />
      <br></br>
      <hr />

      <Age age={age} />

      <AgeBtn handleAge={handleAge} />
    </>
  );
}

export default App;