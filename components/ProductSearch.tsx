"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductSearch(){
    const [query, setQuery] = useState("")
    const router = useRouter();
    const searchParams = useSearchParams()

    function handleSearch(e: React.FormEvent){
        e.preventDefault()
        const params = new URLSearchParams(searchParams)

        if (query) {
        params.set("search", query)
        }

        router.push(`/products?${params.toString()}`)
    }

    return(
        <form onSubmit={handleSearch} className="mb-6">
            <input type="text" placeholder="Search proct" value={query} onChange={(e)=>setQuery(e.target.value)} className="border p-2 w-80" />
            <button className="ml-2 px-4 py-2 bg-white text-black">Search</button>
        </form>
    )
}