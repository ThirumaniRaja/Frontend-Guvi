import React, { useRef } from 'react'

function Useref() {
  const studentNameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const departmentRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit() {
    console.log('Student Name', studentNameRef.current?.value)
    console.log('Email', emailRef.current?.value)
    console.log('Department', departmentRef.current?.value)
  }

  return (
    <div>
      <h3>Student Management System (uncontrolled)</h3>

      <input type="text" placeholder="Enter the student Name" ref={studentNameRef} />

      <br />
      <br />

      <input type="email" placeholder="Enter the student Email" ref={emailRef} />

      <br />
      <br />

      <input type="text" placeholder="Enter the department Name" ref={departmentRef} />

      <br />
      <br />

      <button type="button" onClick={handleSubmit}>
        Register
      </button>
    </div>
  )
}

export default Useref