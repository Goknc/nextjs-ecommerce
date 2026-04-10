"use client"

import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react"

export default function FavoritesPage() {
    const [products,setProducts] = useState<any[]>([])
    const [favorites,setFavorites] = useState<number[]>([])

    useEffect(()=>{
        const fav = localStorage.getItem("favorites")
        const favIds = fav ? JSON.parse(fav).map(Number) : []

        setFavorites(favIds)

        async function loadProducts() {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
        

            const favProducts = data.products.filter((p:any)=>
                favIds.includes(p.id)
            )

            setProducts(favProducts)
        }

        loadProducts()
    },[])
    return (
        <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-2xl font-bold mb-6">Favorites</h1>
            {products.length === 0 && (
                <p>No favorite products yet.</p>
            )}

            <div className="grid grid-cols-4 gap-6">
                {products.map((p:any)=>(
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}
