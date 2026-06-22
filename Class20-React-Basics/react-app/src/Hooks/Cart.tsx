
import { useState } from "react"

export default function Cart() {
  const [cart, setCart] = useState<number>(0)

  const incrementCart = () => setCart((c) => c + 1)
  const decrementCart = () => setCart((c) => Math.max(0, c - 1))
  const reset = () => setCart(0)

  return (
    <div>
      <h2>Cart value is: {cart}</h2>

      <button onClick={incrementCart}>Increment Cart</button>
      <button onClick={decrementCart}>Decrement Cart</button>
      <button onClick={reset}>Reset Cart</button>
    </div>
  )
}
