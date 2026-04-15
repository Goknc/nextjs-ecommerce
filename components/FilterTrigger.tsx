"use client"

import { useState } from "react"
import FilterSidebar from "@/components/FilterSidebar"
import CategoryFilter from "@/components/CategoryFilter"
import ProductSearch from "@/components/ProductSearch"
import PriceFilter from "@/components/PriceFilter"

export default function FilterTrigger({ categories }: { categories: any[] }) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border px-4 py-2 mb-4"
      >
        Filters
      </button>

      <FilterSidebar open={open} onClose={() => setOpen(false)}>
        <CategoryFilter categories={categories} />
        <ProductSearch />
        <PriceFilter />
      </FilterSidebar>
    </>
  )
}