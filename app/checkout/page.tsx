"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage(){

  const { cart, clearCart } = useCart()
  const router = useRouter()

  const [cardNumber,setCardNumber] = useState("")
  const [name,setName] = useState("")
  const [cvv,setCvv] = useState("")

  const total = cart.reduce((sum,item)=>sum + item.price,0)

  function handlePayment(e: React.FormEvent){
    e.preventDefault()

    if(!cardNumber || !name || !cvv){
      alert("Please fill all fields")
      return
    }

    // fake ödeme
    clearCart()

    router.push("/order-success")
  }

  return(

    <div className="max-w-md mx-auto p-10">

      <h1 className="text-2xl mb-6 font-bold">
        Payment
      </h1>

      <p className="mb-4">
        Total: ${total}
      </p>

      <form onSubmit={handlePayment} className="flex flex-col gap-3">

        <input
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e)=>setCardNumber(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Name on Card"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="CVV"
          value={cvv}
          onChange={(e)=>setCvv(e.target.value)}
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-black text-white p-3 mt-3"
        >
          Pay Now
        </button>

      </form>

    </div>

  )

}