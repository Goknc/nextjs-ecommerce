"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navbar(){

  const [token,setToken] = useState<string | null>(null)

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    setToken(storedToken)
  },[token])

  function handleLogout(){
    localStorage.removeItem("token")
    setToken(null)
  }

  return(

    <nav className="flex justify-between p-5 border-b">

      <div className="flex gap-4">

      <Link href="/">
        Home
      </Link>

      <Link href="/products">
        Products
      </Link>

      </div>

      <Image
        src="/logo.png"
        alt="Veloraza logo"
        width={150}
        height={20}
      />

      <div className="flex gap-4">

        <Link href="/cart">
          Cart
        </Link>

        <Link href="/favorites">
          Favorites
        </Link>

        {token ? (

          <button onClick={handleLogout}>
            Logout
          </button>

        ) : (

          <Link href="/login">
            Login
          </Link>

        )}

      </div>

    </nav>

  )
}