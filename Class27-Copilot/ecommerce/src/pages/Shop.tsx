import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/ProductGrid'
import { useCart } from '../store/cart'

export default function Shop() {
  const { data, isLoading } = useProducts()
  const products = data?.products ?? []
  const add = useCart(s => s.add)

  if (isLoading) {
    return <div className="container mx-auto py-16">Loading...</div>
  }

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Shop</h1>
      <ProductGrid products={products} onAdd={(p) => add({ id: p.id, title: p.title, price: p.price, qty: 1, thumbnail: p.thumbnail })} />
    </section>
  )
}