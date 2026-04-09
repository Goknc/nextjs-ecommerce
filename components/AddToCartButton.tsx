"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCart({product}: {product: any}){
    const {addToCart} = useCart();

    return (
        <button 
            onClick={()=> addToCart(product)}
            className="bg-white text-black px-4 py-2 mt-4"
            >
            Add to Cart
        </button>
    )
}