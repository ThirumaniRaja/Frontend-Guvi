
interface Props {
  name: string
  skills?: string[]
}
function Child({name,skills} : Props) {
  return (
    <>
    <div>
      <h2>Child Component - {name}</h2>
     {skills.map((skill) => (
        <p >{skill}</p>
      ))}
    </div>
    </>
  );
}

export default Child;
