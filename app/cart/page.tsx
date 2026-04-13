"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CartPage(){
    const { cart, clearCart } = useCart()
    const router = useRouter()

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    function handleCheckout(){

    clearCart()

    router.push("/checkout")

    }

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
            {cart.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl mb-4">
                        Total: ${total}
                    </h2>
                    <button onClick={handleCheckout} className="bg-black text-white px-6 py-3">Checkout</button>
                </div>
            )}
        </div>
    )
}