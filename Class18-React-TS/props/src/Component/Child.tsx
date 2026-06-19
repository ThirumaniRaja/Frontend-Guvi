
interface Props {
  name: string
}
function Child({name} : Props) {
  return (
    <div>
      <h2>Child Component - {name}</h2>
    </div>
  );
}

export default Child;
