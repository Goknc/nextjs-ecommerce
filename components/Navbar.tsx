"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div>
      <Link href="/cart">
        Cart ({cart.length})
      </Link>
      <Link href='/products'>Products</Link>
    </div>
  );
}