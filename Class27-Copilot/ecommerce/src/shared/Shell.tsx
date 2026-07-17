import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const pageTransition = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } }

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main className="flex-1 container mx-auto px-4 py-8" {...pageTransition}>
        {children}
      </motion.main>
      {/* <Footer /> */}
    </div>
  )
}