"use client"

import { Globe } from "lucide-react"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {

  return (

    <footer className="bg-black text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="space-y-2 text-gray-400 text-sm">

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>İzmir, Türkiye</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+90 555 555 55 55</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>info@veloraza.com</span>
        </div>

      </div>

        <div>

          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/contact">Contact</Link></li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold mb-4">
            Subscribe
          </h3>

          <p className="text-gray-400 mb-4 text-sm">
            Get updates about new products and offers.
          </p>

          <div className="flex">

            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 text-black"
            />

            <button className="bg-white text-black px-4">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">

        © 2026 Made by Gökhan

      </div>

    </footer>

  )
}