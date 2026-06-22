
// import './App.css'

function App() {
  const prices = [500, 1500, 2000, 300]

  // wanted to find the expensive product
  const expensive = prices.filter((price) => price > 1900)

  const products = [
    { name: 'Laptop', stock: 10 },
    { name: 'Mobile', stock: 0 },
  ]

  const available = products.some((product) => product.stock > 0)

  return (
    <>
      <div>
        Expensive product is:
        {expensive.map((price, idx) => (
          <p key={idx}>{price}</p>
        ))}
      </div>

      <h3>{available ? 'Stock is available' : 'Out of stock'}</h3>
      <hr />
      
    </>
  )
}

export default App
