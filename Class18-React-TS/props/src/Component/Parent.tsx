import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child  name={"Hello from Parent"} skills={["React", "TypeScript"]} />
    </div>
  );
}

export default Parent;