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
      className="border py-2 px-4 mb-4 rounded-lg border-[#e9e9e9]"
    >
      <option value="">Sort</option>
      <option value="price-asc">Price Low To High</option>
      <option value="price-desc">Price High To Low</option>
    </select>
  )
}