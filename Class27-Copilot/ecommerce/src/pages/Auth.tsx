import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export default function Auth() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = (v: any) => alert('Logged (mock): ' + JSON.stringify(v))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <input {...register('email')} placeholder="Email" className="w-full p-3 border rounded" />
      {errors.email && <div className="text-sm text-red-500">{String(errors.email.message)}</div>}
      <input type="password" {...register('password')} placeholder="Password" className="w-full p-3 border rounded" />
      {errors.password && <div className="text-sm text-red-500">{String(errors.password.message)}</div>}
      <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg">Login (mock)</button>
    </form>
  )
}