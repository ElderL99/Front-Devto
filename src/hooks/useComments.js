
'use client'

import useSWR from 'swr'

const API = process.env.NEXT_PUBLIC_API_URL   // http://localhost:4000/api
const fetcher = (url) => fetch(url).then((r) => r.json())

export default function useComments(postId, limit = 2, enabled = true) {
  const { data, error, isLoading } = useSWR(
    enabled ? `${API}/comments?post=${postId}&limit=${limit}` : null,
    fetcher
  )

  
  const trimmed = data?.slice(0, limit) ?? []

  return {
    comments: trimmed,
    isLoading,
    isError: !!error,
  }
}
