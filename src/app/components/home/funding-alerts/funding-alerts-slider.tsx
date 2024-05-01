"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { memo } from "react";
import FundingAlertsSlide from "@/components/home/funding-alerts/funding-alerts-slide";
import { SNDSliderLeftArrow, SNDSliderRightArrow } from "@/lib/icons";

export type FundingAlertType = {
  id: string;
  company: {
    logo: string;
    name: string;
    foundingYear: string;
    geography: string;
    industry: string;
  };
  fundNumber: string;
  fundManager: string;
  amount: number;
  reference: string;
};

const fundingAlerts: FundingAlertType[] = [
  {
    id: "1",
    company: {
      logo: "/images/partners/dsg.png",
      name: "Alibaba",
      foundingYear: "2010",
      geography: "Asia",
      industry: "Internet",
    },
    fundNumber: "3",
    fundManager: "Alibaba",
    amount: 100000000,
    reference: "Seed %",
  },
  {
    id: "2",
    company: {
      logo: "/images/partners/dsg.png",
      name: "Amazon",
      foundingYear: "2003",
      geography: "North America",
      industry: "E-commerce",
    },
    fundNumber: "1",
    fundManager: "Amazon",
    amount: 10000,
    reference: "Seed %",
  },
  {
    id: "3",
    company: {
      logo: "/images/partners/fgn.png",
      name: "Apple",
      foundingYear: "1976",
      geography: "North America",
      industry: "Software",
    },
    fundNumber: "2",
    fundManager: "Apple",
    amount: 100,
    reference: "Seed %",
  },
  {
    id: "4",
    company: {
      logo: "/images/partners/fgn.png",
      name: "Baidu",
      foundingYear: "2004",
      geography: "Asia",
      industry: "Internet",
    },
    fundNumber: "4",
    fundManager: "Baidu",
    amount: 500000000,
    reference: "Seed %",
  },
];

const FundingAlertsSlider = () => {
  return (
    <div className="relative w-full">
      <div className="absolute flex justify-between left-[15%] right-[15%] min-[320px]:max-md:left-[20%] min-[320px]:max-md:right-[20%] lg:left-[10%] lg:right-[10%] xl:left-[12%] xl:right-[12%] -bottom-10">
        <span className="prev-el bg-white rounded-full cursor-pointer z-[11]">
          <SNDSliderLeftArrow />
        </span>
        <span className="next-el bg-white rounded-full cursor-pointer z-[11]">
          <SNDSliderRightArrow />
        </span>
      </div>
      <div className="[&>.swiper]:static">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          centeredSlides
          loop
          navigation={{
            prevEl: ".prev-el",
            nextEl: ".next-el",
          }}
          className="[&_.swiper-wrapper]:flex [&_.swiper-wrapper]:py-5 [&_.swiper-wrapper]:items-center [&_.swiper-wrapper_.swiper-slide]:flex [&_.swiper-wrapper_.swiper-slide-prev]:justify-end [&_.swiper-wrapper_.swiper-slide-active]:justify-center [&_.swiper-pagination-bullets.swiper-pagination-horizontal]:mt-5 [&_.swiper-pagination-bullets.swiper-pagination-horizontal]:bottom-auto [&_.swiper-pagination-bullet]:w-10 md:[&_.swiper-pagination-bullet]:w-20 lg:[&_.swiper-pagination-bullet]:w-[147px] [&_.swiper-pagination-bullet]:h-[2px] [&_.swiper-pagination-bullet]:rounded [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:bg-black [&_.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:opacity-90 [&_.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:bg-shade-of-amber"
        >
          {fundingAlerts.map(
            ({ company, fundNumber, fundManager, amount, reference }) => (
              <SwiperSlide key={company.name}>
                <FundingAlertsSlide
                  company={company}
                  fundNumber={fundNumber}
                  fundManager={fundManager}
                  amount={amount}
                  reference={reference}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(FundingAlertsSlider);
