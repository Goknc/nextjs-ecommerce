"use client"

import { useCart } from "@/context/CartContext"
import { useState } from "react"

export default function CheckoutPage(){

  const { cart, clearCart } = useCart()

  const [cardNumber,setCardNumber] = useState("")
  const [name,setName] = useState("")
  const [cvv,setCvv] = useState("")

  const total = cart.reduce((sum,item)=>sum + item.price,0)

  function handlePayment(e: React.FormEvent){
    e.preventDefault()
  }

  return(

    <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      <div>

        <h2 className="text-xl font-semibold mb-6">
          Your Order
        </h2>

        <div className="space-y-4">

          {cart.map((item, index) => (

            <div key={`${item.id}-${index}`} className="flex gap-4 border-b p-3 border-[#F2F1EF]">

              <img
                src={item.thumbnail}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1 flex flex-col justify-center">
                <p className="font-medium text-sm line-clamp-2">
                  {item.title}
                </p>

                <p className="text-gray-700 text-xs">
                  ${item.price}
                </p>
              </div>

            </div>

          ))}

        </div>

        <div className="pt-4 space-y-2 text-sm">

          <div className="flex justify-between text-xl font-semibold mt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

        </div>

      </div>

      <div>

        <h1 className="text-2xl font-bold mb-6">
          Payment
        </h1>

        <form onSubmit={handlePayment} className="space-y-4">

          <input
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e)=>setCardNumber(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black border-[#F2F1EF]"
          />

          <input
            placeholder="Name on Card"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black border-[#F2F1EF]"
          />

          <div className="flex gap-3">

            <input
              placeholder="MM/YY"
              className="w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black border-[#F2F1EF]"
            />

            <input
              placeholder="CVV"
              value={cvv}
              onChange={(e)=>setCvv(e.target.value)}
              className="w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black border-[#F2F1EF]"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Pay Now
          </button>

        </form>

      </div>

    </div>

  )
}