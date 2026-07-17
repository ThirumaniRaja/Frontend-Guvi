import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dummyjson.com', // or https://fakestoreapi.com
  headers: { 'Content-Type': 'application/json' }
})

export const productsApi = {
  list: (params?: any) => api.get('/products', { params }).then(res => res.data),
  get: (id: number | string) => api.get(`/products/${id}`).then(res => res.data)
}