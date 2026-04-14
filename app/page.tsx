import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { getProducts, getCategories } from "@/lib/api";
import CategoryCard from "@/components/CategoryCard";
import HeroSlider from "@/components/HeroSlider"



export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-dark font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-16 bg-white sm:items-start">
        <HeroSlider />
        <h2 className="text-4xl font-medium mx-auto my-16 ">Shop By Categories</h2>
        <div className="grid grid-cols-6 gap-12 max-w-7xl mx-auto">
          {categories.slice(0,6).map((c)=>(
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
        <h2 className="text-4xl font-medium mx-auto my-16">Today's Top Picks</h2>
        <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
          {products.slice(0,4).map((p)=>(
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
