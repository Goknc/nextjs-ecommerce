

export default function CategoryCard({category}) {
  return (
    <div className='card'>
        <img className="rounded-full" src={category.image} alt="" />
        <p className="text-center">{category.name}</p>
    </div>
  )
}
