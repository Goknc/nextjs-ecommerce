"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-white text-[#696E73] mt-20 border-t border-[#E9E9E9]">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-base">

      <div className="space-y-2 text-gray-400">

        <Image
          src="/goknc.png"
          alt="Veloraza logo"
          width={250}
          height={20}
        />

        <div className="flex items-center gap-2">
          <span>İzmir, Türkiye</span>
        </div>

        <div className="flex items-center gap-2">
          <span>+90 555 555 55 55</span>
        </div>

        <div className="flex items-center gap-2">
          <span>info@veloraza.com</span>
        </div>

      </div>

        <div>

          <h3 className="font-semibold mb-4 text-[#101010]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold mb-4 text-[#101010]">
            Subscribe
          </h3>

          <p className="text-gray-400 mb-4">
            Get updates about new products and offers.
          </p>

          <div className="flex">
            
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-3 pl-4 pr-12 text-black border border-gray-300 rounded-full focus:outline-none"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:scale-110 transition">
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#E9E9E9] text-center py-4 text-sm text-gray-400">

        © 2026 Made by Gökhan

      </div>

    </footer>

  )
}