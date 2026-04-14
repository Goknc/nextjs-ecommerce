import Link from "next/link";

export default function ProductCard({product}) {
  console.log(product)
  return (
    <div className='card'>
        <img className="rounded-lg" src={product.images[0]} alt="" />
        <Link className="mt-3 font-lg font-medium" href={`/product/${product.id}`}>{product.title}</Link>
        <p className='font-bold'>{product.price}</p>
    </div>
  )
}
