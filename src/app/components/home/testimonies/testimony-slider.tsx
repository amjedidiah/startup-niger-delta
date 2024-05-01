"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonyCard from "@/components/home/testimonies/testimony-card";
import { memo } from "react";
import { SNDSliderLeftArrow2, SNDSliderRightArrow2 } from "@/lib/icons";

const testimony = {
  person: {
    name: "Olatunji Salawu",
    title: "Head of Linie House Group",
    avatar: "/images/testimony-avatar.png",
  },
  rating: 5,
  content:
    "SNG serves as an ideal platform for showcasing, connecting, and securing funds for innovative projects. It provides a strategic avenue to foster the growth and success of startups and their stakeholders.",
};

const testimonies = Array(10)
  .fill(testimony)
  .map((item, i) => ({ ...item, slug: i }));

function TestimonySlider() {
  return (
    <div className="relative max-w-full md:overflow-hidden flex-shrink-1">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        loop
        navigation={{
          prevEl: ".prev-el-testimony",
          nextEl: ".next-el-testimony",
        }}
        className="[&_.swiper-pagination-bullets.swiper-pagination-horizontal]:relative [&_.swiper-pagination-bullets.swiper-pagination-horizontal]:mt-8 lg:[&_.swiper-pagination-bullets.swiper-pagination-horizontal]:mt-5 [&_.swiper-pagination-bullet]:w-[9px] [&_.swiper-pagination-bullet]:h-[9px] [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:bg-gray-85 [&_.swiper-pagination-bullet-active.swiper-pagination-bullet-active-main]:bg-shade-of-amber"
      >
        {testimonies.map((item) => (
          <SwiperSlide key={item.slug}>
            <TestimonyCard testimony={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-md:absolute flex justify-between md:justify-center max-md:-left-3 max-md:-right-3 max-md:top-1/2 max-md:transform max-md:-translate-y-1/2 md:mt-3">
        <span className="prev-el-testimony bg-[#F9F9F999] cursor-pointer py-2 px-[7px] max-md:pl-[2px] scale-150 md:pb-3 md:pr-4 md:bg-[#18434199] z-[1] md:[&_path]:stroke-white">
          <SNDSliderLeftArrow2 />
        </span>
        <span className="next-el-testimony bg-[#F9F9F999] cursor-pointer py-2 px-[7px] max-md:pr-[2px] scale-150 md:pb-3 z-[1]">
          <SNDSliderRightArrow2 />
        </span>
      </div>
    </div>
  );
}

export default memo(TestimonySlider);
