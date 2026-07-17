import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../services/api'

export function useProducts(params?: any) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: async () => productsApi.list(params),
    staleTime: 1000 * 60 * 2,
  })
}

export function useProduct(id?: string | number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => productsApi.get(id),
    enabled: Boolean(id),
  })
}