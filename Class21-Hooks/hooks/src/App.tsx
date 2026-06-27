// ...existing code...
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // add form state and handlers
  type FormDataType = { [key: string]: string }
  const [formData, setFormData] = useState<FormDataType>({ name: '', email: '' })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <section id="center">
        {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> */}
       
      </section>

      {/* added form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
           value={formData.name}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="ticks"></div>
    </>
  )
}

export default App