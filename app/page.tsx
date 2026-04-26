import ProductCard from "@/components/ProductCard";
import { getProducts, getCategories } from "@/lib/api";
import CategoryCard from "@/components/CategoryCard";
import HeroSlider from "@/components/HeroSlider"
import ProductSlider from "@/components/ProductSlider"


export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-dark font-sans">
      <main className="w-full max-w-7xl mx-auto py-10 px-4 md:px-10 lg:px-16">
        <HeroSlider />
        <h2 className="text-4xl font-medium mx-auto my-16 ">Shop By Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.slice(0,6).map((c,index)=>(
            <CategoryCard key={index} category={c} />
          ))}
        </div>
        <h2 className="text-4xl font-medium mx-auto my-16">Today's Top Picks</h2>
        <ProductSlider products={products} />
      </main>
    </div>
  );
}
