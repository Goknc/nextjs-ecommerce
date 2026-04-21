"use client"

import { useCart } from "@/context/CartContext"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

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

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 p-6 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto space-y-4">

          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
            <div key={item.id} className="flex gap-3 border-b pb-3">

              <img
                src={item.thumbnail}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">${item.price}</p>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 mt-1"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4">

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            {/* CLEAR CART */}
            <button
              onClick={clearCart}
              className="w-full text-sm text-red-500 mb-3"
            >
              Clear Cart
            </button>

            <button
              onClick={() => {
                onClose()
                router.push("/checkout")
              }}
              className="w-full bg-black text-white py-3 mb-2"
            >
              Check Out
            </button>

            <button
              onClick={onClose}
              className="w-full border py-3"
            >
              Continue Shopping
            </button>

          </div>
        )}

      </div>
    </>
  )
}