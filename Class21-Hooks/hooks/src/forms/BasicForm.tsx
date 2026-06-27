import React, { useState } from 'react'

function BasicForm() {
  const [studentName, setStudentName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
    if ('preventDefault' in e) e.preventDefault()
    console.log('Student Name', studentName)
    console.log('Email', email)
    console.log('Department', department)
  }

  return (
    
      <div>
        <h3>Student Management System</h3>

        <input
          type="text"
          placeholder="Enter the student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter the student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>
     

      {/* Live preview (outside the form - no extra/nested form tags) */}
      <hr />
      <h3>Live Preview</h3>
      <p>Name: {studentName}</p>
      <p>Email: {email}</p>
      <p>Department: {department}</p>
      {/* optional Register button using onClick (calls same handler) */}
      <br />
      <button onClick={handleSubmit}>Register</button>
    </div>
    
  )
}

export default BasicForm