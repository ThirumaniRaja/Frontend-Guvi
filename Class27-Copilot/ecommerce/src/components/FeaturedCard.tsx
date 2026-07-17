import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {
  title: string
  price: string
  img: string
  to?: string
}

export default function FeaturedCard({ title, price, img, to = '/shop' }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card card-hover featured-card"
      title={title}
    >
      <Link to={to} className="block">
        <div className="h-56 md:h-48 lg:h-56 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium leading-tight">{title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm text-muted">{price}</div>
            <div className="badge">New</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}