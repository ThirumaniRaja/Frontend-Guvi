
interface Product {
  name: string
  price: number
  image: string
}

function ProductCard({ name, price, image }: Product) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  )
}

export default ProductCard
