// ...existing code...
type Product = {
  id: number
  name: string
  price: number
}

type Course = {
  title: string
  completed: boolean
}

export default function Marks() {
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 25000 },
    { id: 3, name: 'Headphones', price: 3000 },
  ]

  const courses: Course[] = [
    { title: 'HTML', completed: true },
    { title: 'CSS', completed: true },
    { title: 'React', completed: false },
  ]

  const allCompleted = courses.every((course) => course.completed)

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
        </div>
      ))}

      <h3>Courses</h3>
      {courses.map((course, index) => (
        <div key={index}>
          <h4>{course.title}</h4>
          <p>Status: {course.completed ? 'Completed' : 'In Progress'}</p>
        </div>
      ))}
      <hr />
    </div>
    

  )
}