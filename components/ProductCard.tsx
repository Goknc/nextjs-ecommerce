import Link from "next/link";

export default function ProductCard({product}) {
  return (
    <div className='card'>
        <img className="rounded-lg bg-[#F2F1EF] mb-3 h-[450px] object-contain" src={product.images[0]} alt="" />
        <Link className="mt-5 font-lg font-medium" href={`/product/${product.id}`}>{product.title}</Link>
        <p className='font-bold text-[#DC4646]'>${product.price}</p>
    </div>
  )
}
