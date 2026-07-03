import Title from "./components/Title";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import UseRefDemo from "./components/UseRefDemo";
import { useCallback, useState } from "react";
import ReducerDemo from "./components/ReducerDemo";

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

      <UseRefDemo />

      <h2>Im use reducer</h2>
      <ReducerDemo />
    </>
  );
}

export default App;