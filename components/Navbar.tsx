"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Handbag, Heart, UserRound } from "lucide-react"
import CartPopup from "@/components/CartPopup"
import { useCart } from "@/context/CartContext"

export default function Navbar(){

  const [token,setToken] = useState<string | null>(null)
  const [open,setOpen] = useState(false)

  const { cart } = useCart()

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    setToken(storedToken)
  },[])

  function handleLogout(){
    localStorage.removeItem("token")
    setToken(null)
  }

  return(

    <>
      <nav className="px-16 py-4 flex justify-between items-center border-b">

        <div className="flex gap-6">

          <Link className="nav-link" href="/">
            Home
          </Link>

          <Link className="nav-link" href="/products">
            Products
          </Link>

        </div>

        <Image
          src="/logo.png"
          alt="Veloraza logo"
          width={180}
          height={20}
        />

        <div className="flex gap-6 items-center">

          <button
            onClick={() => setOpen(true)}
            className="nav-link relative"
          >
            <Handbag />

            {cart.length > 0 && (
              <span className="absolute top-5 -right-2 text-xs bg-red-600 text-white px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          <Link className="nav-link" href="/favorites">
            <Heart />
          </Link>

          {token ? (

            <button
              className="nav-link"
              onClick={handleLogout}
            >
              <UserRound />
            </button>

          ) : (

            <Link className="nav-link" href="/login">
              <UserRound />
            </Link>

          )}

        </div>

      </nav>

      <CartPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}