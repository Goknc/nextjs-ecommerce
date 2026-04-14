"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function HeroSlider() {

  const slides = [
    {
      title: "Elevate Your Style with Timeless Elegance",
      desc: "Elevate Your Style with Timeless Elegance",
      image: "/slide1.jpg",
    },
    {
      title: "Summer Sale",
      desc: "Up to 50% off",
      image: "/slide2.jpg",
    },
    {
      title: "Premium Products",
      desc: "High quality items",
      image: "/slide3.jpg",
    },
  ]

  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="w-full h-[750px] rounded-xl"
    >

      {slides.map((slide, i) => (

        <SwiperSlide key={i}>

          <div className="relative w-full h-full">

            <img
              src={slide.image}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

              <p className="text-sm tracking-widest mb-4">
                {slide.subtitle}
              </p>

              <h2 className="text-10xl md:text-6xl font-semibold leading-tight whitespace-pre-line mb-6 max-w-5xl">
                {slide.title}
              </h2>

              <button className="bg-white text-black px-6 py-3 rounded-full text-md font-semibold hover:bg-gray-200 transition">
                Shop Styles
              </button>

            </div>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>
  )
}