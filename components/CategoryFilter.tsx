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
        <>
        <h3 className="mb-5 mt-5 text-xl">Categories</h3>
        <div className="flex flex-col gap-3 mb-3 max-h-80 overflow-auto">
            {categories.map((cat:any)=>(
                <button key={cat.id} onClick={()=>handleCategory(cat.slug)} className="text-left px-3 py-1">{cat.name} </button>
            ))}
        </div>
        </>
    )
}
