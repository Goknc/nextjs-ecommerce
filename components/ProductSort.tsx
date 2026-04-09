"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function ProductSort(){

  const router = useRouter()
  const searchParams = useSearchParams()

  function handleSort(value:string){

    const params = new URLSearchParams(searchParams)

    params.set("sort", value)

    router.push(`/products?${params.toString()}`)
  }

  return (
    <select
      onChange={(e)=>handleSort(e.target.value)}
      className="border p-2 mb-4"
    >
      <option value="">Sort</option>
      <option value="price-asc">Price Low → High</option>
      <option value="price-desc">Price High → Low</option>
    </select>
  )
}