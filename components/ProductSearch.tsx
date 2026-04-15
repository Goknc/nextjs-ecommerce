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
        <>
        <hr  className="mt-5" />
        <h3 className="mb-5 mt-5 text-xl">Search For Product</h3>
        <form onSubmit={handleSearch} className="mb-6 flex">
            <input type="text" placeholder="Search proct" value={query} onChange={(e)=>setQuery(e.target.value)} className="border rounded-lg p-2 border-[#e9e9e9] w-80" />
            <button className="ml-2 px-4 py-2 bg-white text-black border p-2 w-32 rounded-lg border-[#e9e9e9]">Search</button>
        </form>
        </>
    )
}