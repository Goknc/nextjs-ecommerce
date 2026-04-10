"use client"

import { isFavorite, toggleFavorite } from "@/lib/favorites"
import { useEffect, useState } from "react"

export default function FavoriteButton({productId}:{productId:number}){
    const [fav,setFav] = useState(false)

    useEffect(()=>{
        setFav(isFavorite(productId))
    },[productId])

    function handleFavorite(){
        toggleFavorite(productId)
        setFav(!fav)
    }

    return (
        <button onClick={handleFavorite}>
            {fav ? "❤️" : "🤍"}
        </button>
    )
}