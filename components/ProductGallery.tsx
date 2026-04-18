"use client"

import { useState } from "react"

export default function ProductGallery({ images }: { images: string[] }) {

  const [selected, setSelected] = useState(images[0])

  return (

    <div>

      <img
        src={selected}
        className="w-full rounded mb-4 bg-[#F0F0F0]"
      />

      <div className="flex gap-2">

        {images.map((img, i) => (

          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border bg-[#F0F0F0] ${
              selected === img ? "border-black" : "border-gray-300"
            }`}
          />

        ))}

      </div>

    </div>
  )
}