import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Thiru";

  const mobiles = ["iPhone", "Samsung", "OnePlus", "Google Pixel"];

  const num = 30;
  const num2 = 20;
  function handleClick(){
    alert("Button Clicked")
  } 

  function greet(){
    return "Welcome to React Vite!"
  }

  return (
   <>
   <h1>{greet()}</h1>
   
   <div>Hello {name}</div>
   <button onClick={handleClick}>Click Me</button>

   <div style={{backgroundColor: "lightblue", padding: "20px", marginTop: "20px"}}>
        Hello {name}, welcome to React Vite!
   </div>

   <div class="welcome">
    here you well learn how to use React with Vite, a fast build tool for modern web development.
   </div>
   <div>
   <p>The sum of {num} and {num2} is {num + num2}.</p>
  </div>
    <div>
   <p>The multiple of {num} and {num2} is {num * num2}.</p>
  </div>
    <div>
   <p>The substraction of {num} and {num2} is {num - num2}.</p>
  </div>
  <div>
    <span>{mobiles[0]}</span><br />
    <span>{mobiles[1]}</span><br />
    <span>{mobiles[2]}</span><br />
    <span>{mobiles[3]}</span>
  </div>
   </>  


  )
}

export default App
