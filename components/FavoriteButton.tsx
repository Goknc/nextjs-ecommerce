"use client"

import { isFavorite, toggleFavorite } from "@/lib/favorites"
import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export default function FavoriteButton({ productId }: { productId: number }) {
  const [fav, setFav] = useState(false)

  useEffect(() => {
    setFav(isFavorite(productId))
  }, [productId])

  function handleFavorite() {
    toggleFavorite(productId)
    setFav(!fav)
  }

  return (
    <button onClick={handleFavorite}>
      <Heart
        size={20}
        className={`transition-all ${
          fav ? "fill-red-600 text-red-600" : "text-gray-400"
        }`}
      />
    </button>
  )
}