import Link from "next/link"

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="card block"
    >
      <img
        className="rounded-full"
        src={`https://picsum.photos/300/300?seed=${category.slug}`}
      />

      <p className="text-center text-xl font-medium mt-5">
        {category.name}
      </p>
    </Link>
  )
}