import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Shell from '../shared/Shell'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import CartPage from '../pages/Cart'
import Auth from '../pages/Auth'

export default function AppRouter() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Shell>
  )
}