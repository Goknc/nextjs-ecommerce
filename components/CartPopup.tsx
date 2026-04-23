"use client"

import { useCart } from "@/context/CartContext"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function CartPopup({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {

  const { cart, removeFromCart, clearCart } = useCart()
  const router = useRouter()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item,index) => (
            <div key={`${item.id}-${index}`} className="flex gap-3 border-b pb-3">

              <img
                src={item.thumbnail}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-2">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  ${item.price}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t">

            <div className="flex justify-between mb-4 text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={clearCart}
              className="w-full text-sm text-red-500 mb-3 hover:underline"
            >
              Clear Cart
            </button>

            <button
              onClick={() => {
                onClose()
                router.push("/checkout")
              }}
              className="w-full bg-black text-white py-3 mb-2 hover:opacity-90 transition"
            >
              Check Out
            </button>

            <button
              onClick={onClose}
              className="w-full border py-3 hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>

          </div>
        )}

      </div>
    </>
  )
}