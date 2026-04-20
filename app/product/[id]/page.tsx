import ProductGallery from "@/components/ProductGallery"
import AddToCartButton from "@/components/AddToCartButton"
import FavoriteButton from "@/components/FavoriteButton"
import { Star } from "lucide-react"

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  })
  return res.json()
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params
  const product = await getProduct(Number(id))

  return (
    <div className="max-w-6xl mx-auto p-10">

      <div className="flex gap-10">

        <ProductGallery images={product.images} />

        <div>

          <p className="text-gray-500 mb-2">
            {product.brand}
          </p>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="mb-5 text-gray-600">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mb-4">

            {[1,2,3,4,5].map((i) => (

              <Star
                key={i}
                className={`w-5 h-5 ${
                  i <= Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />

            ))}

            <span className="ml-2 text-sm text-gray-600">
              {product.rating}
            </span>

          </div>

          <p className="text-2xl font-semibold mb-5">
            ${product.price}
          </p>

          <div className="flex gap-3 mb-6 items-center">
            <AddToCartButton product={product} />
            <FavoriteButton productId={product.id} />
          </div>

        </div>

      </div>

      <div className="mt-16">

        <h2 className="text-2xl font-bold mb-6">
          Reviews
        </h2>

        <div className="space-y-4">

          {product.reviews.map((r:any, i:number) => (

            <div key={i} className="flex">

              <div className="flex justify-between items-center mb-2">

                <img
                  src={`https://ui-avatars.com/api/?name=${r.reviewerName}&background=random`}
                  className="w-10 h-10 rounded-full"
                />

                <div className="mx-5">

                  <div className="flex items-center gap-1">

                    {[1,2,3,4,5].map((star) => (

                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= r.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />

                    ))}

                  </div>
                
                  <p className="font-semibold mt-3">
                    {r.reviewerName}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}