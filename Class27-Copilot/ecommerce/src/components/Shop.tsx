import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [q, setQ] = useState('')
  const { data, isLoading } = useProducts({ q })
  const products = data?.products ?? []

  return (
    <section>
      <div className="mb-6 flex gap-4">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search products" className="flex-1 rounded-lg border p-3" />
        <select className="rounded-lg border p-3">
          <option>Sort</option>
        </select>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p: any) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  )
}