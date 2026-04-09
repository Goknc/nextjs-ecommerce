import PriceFilter from "@/components/PriceFilter";
import ProductCard from "@/components/ProductCard";
import ProductSearch from "@/components/ProductSearch";
import CategoryFilter from "@/components/CategoryFilter";
import ProductSort from "@/components/ProductSort"
import { getCategories } from "@/lib/api"


async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductsPage({searchParams}: {
    searchParams: Promise<{search?: string 
    min?: string
    max?: string
    category?: string
    sort?: string
}>}) {

    const params = await searchParams;
    const search = params.search?.toLowerCase() || ""
    const min = Number(params.min) || 0
    const max = Number(params.max) || Infinity
    const category = params.category || ""
    const sort = params.sort || ""
    const products = await getProducts()
    const categories = await getCategories()
    const validCategories = categories.filter((cat:any) =>
        !cat.name.includes("’") &&
        /^[A-Z]/.test(cat.name) &&
        !cat.slug.includes("test") &&
        !cat.slug.includes("category")
    )

    let filteredProducts = products.filter((p: any) => {

    const title = p.title.toLowerCase()

    const matchesSearch = title.includes(search)
    const matchesPrice = p.price >= min && p.price <= max
    const matchesCategory = category ? p.category.slug === category : true

    const validTitle =
        p.title.includes(" ") &&
        /^[A-Z][a-z&]*(?:-(?:[A-Z][a-z&]*|and|with|of|for|the|in|on)|\s(?:[A-Z][a-z&]*|and|with|of|for|the|in|on))*$/.test(p.title) &&
        !/[0-9.]/.test(p.title) &&
        !title.includes("test") &&
        !title.includes("new") &&
        !title.includes("nuevo")

    return matchesSearch && matchesPrice && matchesCategory && validTitle

    })

    if (sort === "price-asc") {
    filteredProducts = filteredProducts.sort((a:any,b:any)=>a.price - b.price)
    }

    if (sort === "price-desc") {
    filteredProducts = filteredProducts.sort((a:any,b:any)=>b.price - a.price)
    }

    return(
        <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-2xl font-bold mb-8">All Products</h1>
            <CategoryFilter categories={validCategories}  />
            <ProductSearch />
            <PriceFilter />
            <ProductSort />
            <div className="grid grid-cols-4 gap-6">
                {filteredProducts.map((p:any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
    
}