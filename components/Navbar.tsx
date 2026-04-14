"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Handbag, Heart, UserRound } from "lucide-react"

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

    <nav className="px-16 flex justify-between border-b">

      <div className="flex gap-4">

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
        width={250}
        height={20}
      />

      <div className="flex gap-4">

        <Link className="nav-link" href="/cart">
          <Handbag />
        </Link>

        <Link className="nav-link" href="/favorites">
          <Heart />
        </Link>

        {token ? (

        <Link
          href="#"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            handleLogout()
          }}
        >
          <UserRound />
        </Link>

        ) : (

          <Link className="nav-link" href="/login">
            <UserRound />
          </Link>

        )}

      </div>

    </nav>

  )
}