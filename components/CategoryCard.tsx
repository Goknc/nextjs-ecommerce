

export default function CategoryCard({category}) {
  return (
    <div className='card'>
        <img className="rounded-full" src={`https://picsum.photos/300/300?random=${category.slug}`} />
        <p className="text-center text-xl font-medium mt-5">{category.name}</p>
    </div>
  )
}
