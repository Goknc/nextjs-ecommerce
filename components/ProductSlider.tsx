"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ProductCard from "./ProductCard"

import "swiper/css"
import "swiper/css/navigation"

export default function ProductSlider({ products }: { products: any[] }) {

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="max-w-7xl mx-auto"
    >

      {products.slice(0, 8).map((p, i) => (
        <SwiperSlide key={`${p.id}-${i}`}>
          <ProductCard product={p} />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}