"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage(){
    const {cart} = useCart()

    return(
        <div className="max-w-5xl mx-auto p-10">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
            {cart.length === 0 && <p>Your cart is empty</p>}
            {cart.map((product)=>(
                <div key={product.id} className="border p-4 mb-3">
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}