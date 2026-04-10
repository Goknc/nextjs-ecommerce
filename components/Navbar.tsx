"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

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

      <Link href="/">
        Store
      </Link>

      <div className="flex gap-4">

        <Link href="/products">
          Products
        </Link>

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