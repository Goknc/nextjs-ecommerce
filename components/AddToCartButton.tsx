"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCart({product}: {product: any}){
    const {addToCart} = useCart();

    return (
        <button 
            onClick={()=> addToCart(product)}
            className="bg-black text-white rounded-2xl px-6 py-2 text-lg"
            >
            Add to Cart
        </button>
    )
}