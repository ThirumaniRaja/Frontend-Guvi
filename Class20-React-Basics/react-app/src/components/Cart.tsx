
type CartItem = {
  id: number
  name: string
  price: number
}

export default function Cart() {
  const cartItems: CartItem[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "keyboard", price: 2000 },
  ]

  const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price, 0)

  // sort the products by price without mutating original array
  const sortedProducts = [...cartItems].sort((a, b) => a.price - b.price)

  // check the user roles
  const roles: string[] = ["Admin", "Manager", "Employee"]

  const isAdmin = roles.includes("Admin")

  return (
    <div>
      <h2>
        Cart Total is: <span>Rs. {totalAmount}</span>
      </h2>

      <h2>Products BY price</h2>
      {sortedProducts.map((product) => (
        <p key={product.id}>
          {product.name} - Rs {product.price}
        </p>
      ))}

      <h2>Role Check:</h2>
      <p>{isAdmin ? "Admin access granted" : "Access denied"}</p>
    </div>
  )
}