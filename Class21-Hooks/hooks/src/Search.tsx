import { useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");

  const students = [
    { id: 1, name: "Thiru" },
    { id: 2, name: "Raja" },
    { id: 3, name: "Nithi" },
    { id: 4, name: "David" },];

    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase() === search.toLowerCase()
    );

  

  return (
    <div>
      <h3>Search </h3>
      <input
        type="text"
        placeholder="Enter search query"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>

    
  );
}

export default Search;
