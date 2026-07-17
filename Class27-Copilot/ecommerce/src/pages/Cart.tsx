import React from 'react'
import { useCart } from '../store/cart'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const items = useCart(s => s.items)
  const total = useCart(s => s.total())
  const remove = useCart(s => s.remove)
  const updateQty = useCart(s => s.updateQty)

  if (items.length === 0) return <div className="py-8 text-center">Your cart is empty. <Link to="/shop" className="text-accent">Start shopping</Link></div>

  return (
    <div className="space-y-4">
      {items.map(i => (
        <div key={i.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-soft">
          <img src={i.thumbnail} alt={i.title} className="w-20 h-20 object-cover rounded-md" />
          <div className="flex-1">
            <div className="font-medium">{i.title}</div>
            <div className="text-sm text-gray-500">${i.price}</div>
          </div>
          <input type="number" min={1} value={i.qty} onChange={e => updateQty(i.id, Number(e.target.value))} className="w-20 p-2 border rounded" />
          <button onClick={() => remove(i.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="text-right font-semibold">Total: ${total.toFixed(2)}</div>
      <div className="text-right">
        <button className="px-6 py-3 bg-accent text-white rounded-lg">Checkout (placeholder)</button>
      </div>
    </div>
  )
}