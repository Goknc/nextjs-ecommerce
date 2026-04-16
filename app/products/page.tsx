import ProductCard from "@/components/ProductCard"
import ProductSort from "@/components/ProductSort"
import FilterTrigger from "@/components/FilterTrigger"
import { getCategories } from "@/lib/api"

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  })

  const data = await res.json()
  return data.products
}

type SearchParams = {
  search?: string
  min?: string
  max?: string
  category?: string
  sort?: string
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {

  const params = await searchParams

  const search = params.search?.toLowerCase() || ""
  const min = Number(params.min) || 0
  const max = Number(params.max) || Infinity
  const category = params.category || ""
  const sort = params.sort || ""

  const products = await getProducts()
  const categories = await getCategories()

  let filteredProducts = products.filter((p: any) => {

    const title = p.title.toLowerCase()

    return (
      title.includes(search) &&
      p.price >= min &&
      p.price <= max &&
      (category ? p.category === category : true)
    )
  })

  if (sort === "price-asc") {
    filteredProducts = filteredProducts.sort(
      (a: any, b: any) => a.price - b.price
    )
  }

  if (sort === "price-desc") {
    filteredProducts = filteredProducts.sort(
      (a: any, b: any) => b.price - a.price
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-medium mb-3 text-center">
        All Products
      </h1>
      <p className="text-center text-[#696E73] w-[500px] mx-auto">Step into our Tops & Shirts Collection, where elegance meets confidence in styles that inspire every moment.</p>
      <div className="flex justify-between mt-8">
        <FilterTrigger categories={categories} />

        <ProductSort />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((p: any, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>

    </div>
  )
}