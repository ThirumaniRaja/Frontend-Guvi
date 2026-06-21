// ...existing code...
import "./ProductList.css"
import ProductCard from "./Productcard"

interface Product {
  name: string
  price: number
  image: string
}

function ProductList() {
  const products: Product[] = [
    {
      name: "AC",
      price: 17999,
      image:
        "https://m.media-amazon.com/images/I/317T88i-HOL._SX342_SY445_QL70_FMwebp_.jpg",
    },
    // add more products here
  ]

  return (
    <>
      <div className="container">
        <h2>Product List Page</h2>

        <div className="flex-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
