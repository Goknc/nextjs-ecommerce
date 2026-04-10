"use client"

import { useState } from "react"

export default function LoginPage(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  async function handleLogin(e:React.FormEvent){

    e.preventDefault()

    const res = await fetch("https://dummyjson.com/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        password
      })
    })
    if(!res.ok){
        alert("Invalid username or password")
        return
    }

    const data = await res.json()

    localStorage.setItem("token",data.token)

    window.location.href = "/"
  }

  return(
    <div className="max-w-md mx-auto p-10">

      <h1 className="text-2xl mb-5">Login</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">

        <input
          placeholder="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="border p-2"
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="border p-2"
        />

        <button className="bg-black text-white p-2">
          Login
        </button>

        <button
        type="button"
        onClick={()=>{
            setUsername("emilys")
            setPassword("emilyspass")
        }}
        >
        Use Demo Account
        </button>

      </form>

    </div>
  )
}