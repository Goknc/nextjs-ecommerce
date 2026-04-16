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
        className="border py-2 px-4 mb-4 rounded-lg border-[#e9e9e9]"
      >
        Show Filters
      </button>

      <FilterSidebar open={open} onClose={() => setOpen(false)}>
        <CategoryFilter categories={categories} />
        <ProductSearch />
        <PriceFilter />
      </FilterSidebar>
    </>
  )
}