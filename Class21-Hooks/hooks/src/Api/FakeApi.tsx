import { use, useEffect, useState } from "react";

 type product = {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    }

function FakeApi(){
   

    const API_URL = "https://fakestoreapi.com/products";
    const [product , setProduct] = useState<product[]>([]);
    const [loading , setLoading] = useState<boolean>(false);
    const [error , setError] = useState<string | null>(null);

    useEffect(() => {
         getProduct();
     },[])  

   async function getProduct(){
       setLoading(true);
       try {
           const response = await fetch(API_URL);
           if (!response.ok) {
               throw new Error("Network response was not ok");
           }
           const data = await response.json();
           setProduct(data);
       } catch (error) {
           console.error("Error fetching products:", error);
           setError("Failed to fetch products");
       } finally {
           setLoading(false);
       }
   }

   if(loading){
       return <div>Loading...</div>;
   }

   return(
        <div className="container">
    <h1>GUVI HCL SHOPPING MALL</h1>

    <div className="product-grid">
      {product.map((item) => (
        <div key={item.id} className="card">
          <img
            src={item.image}
            alt={item.title}
            className="image"
          />

          <h3>{item.title}</h3>

          <p className="price">${item.price}</p>

          <p className="category">{item.category}</p>

          <p className="description">
            {item.description.substring(0, 50)}...
          </p>
        </div>
      ))}
    </div>
  </div>
   )
}

export default FakeApi;