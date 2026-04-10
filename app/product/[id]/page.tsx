import AddToCartButton from "@/components/AddToCartButton";
import FavoriteButton from "@/components/FavoriteButton";

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <div className="flex items-center gap-10 p-10">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-96 rounded"
      />

      <div>
        <h1 className="text-3xl mb-5 font-bold">{product.title}</h1>

        <p className="mb-5 text-gray-600">
          {product.description}
        </p>

        <p className="text-xl font-semibold mb-5">
          ${product.price}
        </p>

        <AddToCartButton product={product} />

        <FavoriteButton productId={product.id} />

      </div>

    </div>
  );
}