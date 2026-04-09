"use client"

import { useRouter, useSearchParams} from "next/navigation"
import { useState } from "react"

export default function PriceFilter(){
    const router = useRouter()
    const searchParams = useSearchParams()

    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    function handleFilter(e: React.FormEvent) {
        e.preventDefault()
        const params = new URLSearchParams(searchParams)

        if(min) params.set("min", min)
        if(max) params.set("max", max)

        router.push(`/products?${params.toString()}`)
    }

    return(
        <form onSubmit={handleFilter} className="mb-6 flex gap-2">
            <input type="number" placeholder="Min price" value={min} onChange={(e)=>setMin(e.target.value)} className="border p-2 w-32" />
            <input type="number" placeholder="Max price" value={max} onChange={(e)=>setMax(e.target.value)} className="border p-2 w-32" />
            <button className="bg-white text-black px-4">Filter</button>
        </form>
    )
}