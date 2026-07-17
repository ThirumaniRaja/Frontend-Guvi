import React from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types'

export default function ProductGrid({ products, onAdd }: { products: Product[]; onAdd?: (p: any) => void }) {
  if (!products || products.length === 0) {
    return <div className="py-20 text-center text-muted">No products found.</div>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((p) => (
        <ProductCard key={p.id} product={p as any} onAdd={onAdd} />
      ))}
    </div>
  )
}