"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product) {
    setCart((prev) => [...prev, product]);
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}