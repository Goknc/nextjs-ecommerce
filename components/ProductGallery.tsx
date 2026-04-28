"use client"

import { useState } from "react"

export default function ProductGallery({ images }: { images: string[] }) {

  const [selected, setSelected] = useState(images[0])
  const [zoomStyle, setZoomStyle] = useState({})

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    })
  }

  function handleLeave() {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    })
  }

  return (

    <div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="md:w-96 overflow-hidden rounded cursor-zoom-in"
      >

        <img
          src={selected}
          style={zoomStyle}
          className="w-full h-full object-cover transition-transform duration-200 bg-[#F2F1EF] "
        />

      </div>

      <div className="flex gap-2 mt-4">

        {images.map((img, i) => (

          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className={`bg-[#F2F1EF] w-20 h-20 object-cover rounded cursor-pointer border ${
              selected === img ? "border-black" : "border-gray-300"
            }`}
          />

        ))}

      </div>

    </div>
  )
}