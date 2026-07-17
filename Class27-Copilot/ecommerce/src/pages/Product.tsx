import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProducts'
import { useCart } from '../store/cart'

export default function ProductPage() {
  const { id } = useParams()
  const { data, isLoading } = useProduct(id)
  const [qty, setQty] = useState(1)
  const add = useCart(s => s.add)

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>Not found</div>

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img src={data.thumbnail} alt={data.title} className="w-full rounded-xl object-cover" />
      <div>
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <p className="text-xl text-accent">${data.price}</p>
        <p className="mt-4 text-gray-600">{data.description}</p>
        <div className="mt-6 flex items-center gap-2">
          <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="w-20 p-2 border rounded" />
          <button onClick={() => add({ id: data.id, title: data.title, price: data.price, qty, thumbnail: data.thumbnail })}
            className="px-4 py-2 bg-primary text-white rounded-lg">Add to cart</button>
        </div>
      </div>
    </div>
  )
}