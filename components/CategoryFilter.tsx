"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function CategoryFilter({ categories }:any) {
    const router = useRouter()
    const searchParams = useSearchParams()

    function handleCategory(category: string){
        const params = new URLSearchParams(searchParams)
        params.set("category", category)
        router.push(`/products?${params.toString()}`)
    }

    return (
        <div className="flex gap-3 mb-3">
            {categories.map((cat:any)=>(
                <button key={cat.id} onClick={()=>handleCategory(cat.slug)} className="border px-3 py-1">{cat.name}</button>
            ))}
        </div>
    )
}