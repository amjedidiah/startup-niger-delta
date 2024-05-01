"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import EventCard from "@/components/home/events/event-card";
import { memo, useLayoutEffect, useRef, useState } from "react";

const events = [
  {
    slug: "conference-1",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/conference-1.avif",
    name: "Conference",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur quos nulla aut, ex natus dignissimos, ducimus at atque consequuntur earum modi ratione doloribus officia ab tempora tempore iste a praesentium nisi illum vel ipsam cumque? Asperiores ipsa quaerat dolor iure facere consequatur tempore? Itaque voluptates ea, ipsum labore soluta veritatis eaque optio illo! Perferendis facilis nam totam repellendus id iusto animi illo deleniti suscipit! Explicabo nam, excepturi dolores, architecto temporibus libero culpa sunt nesciunt aut quod vitae, deleniti velit? Dolorum, possimus, beatae deleniti sapiente sit in fuga at nulla consequatur vitae tenetur saepe exercitationem optio ad ullam rem enim?",
    registrationLink: "",
  },
  {
    slug: "workshop-1",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "TechPro Workshop",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur quos nulla aut, ex natus dignissimos, ducimus at atque consequuntur earum modi ratione doloribus officia ab tempora tempore iste a praesentium nisi illum vel ipsam cumque? Asperiores ipsa quaerat dolor iure facere consequatur tempore? Itaque voluptates ea, ipsum labore soluta veritatis eaque optio illo! Perferendis facilis nam totam repellendus id iusto animi illo deleniti suscipit! Explicabo nam, excepturi dolores, architecto temporibus libero culpa sunt nesciunt aut quod vitae, deleniti velit? Dolorum, possimus, beatae deleniti sapiente sit in fuga at nulla consequatur vitae tenetur saepe exercitationem optio ad ullam rem enim?",
    registrationLink: "",
  },
  {
    slug: "conferenc-2",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/conference-2.avif",
    name: "Conference",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur quos nulla aut, ex natus dignissimos, ducimus at atque consequuntur earum modi ratione doloribus officia ab tempora tempore iste a praesentium nisi illum vel ipsam cumque? Asperiores ipsa quaerat dolor iure facere consequatur tempore? Itaque voluptates ea, ipsum labore soluta veritatis eaque optio illo! Perferendis facilis nam totam repellendus id iusto animi illo deleniti suscipit! Explicabo nam, excepturi dolores, architecto temporibus libero culpa sunt nesciunt aut quod vitae, deleniti velit? Dolorum, possimus, beatae deleniti sapiente sit in fuga at nulla consequatur vitae tenetur saepe exercitationem optio ad ullam rem enim?",
    registrationLink: "",
  },
  {
    slug: "workshop-2",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "Bio Workshop",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur quos nulla aut, ex natus dignissimos, ducimus at atque consequuntur earum modi ratione doloribus officia ab tempora tempore iste a praesentium nisi illum vel ipsam cumque? Asperiores ipsa quaerat dolor iure facere consequatur tempore? Itaque voluptates ea, ipsum labore soluta veritatis eaque optio illo! Perferendis facilis nam totam repellendus id iusto animi illo deleniti suscipit! Explicabo nam, excepturi dolores, architecto temporibus libero culpa sunt nesciunt aut quod vitae, deleniti velit? Dolorum, possimus, beatae deleniti sapiente sit in fuga at nulla consequatur vitae tenetur saepe exercitationem optio ad ullam rem enim?",
    registrationLink: "",
  },
];
export type Event = (typeof events)[number];

const SPACE_BETWEEN_SLIDES = 20;
const SLIDES_PER_VIEW = 3;

function EventSlider() {
  const swiperRef = useRef<SwiperRef>(null);
  const [swiperMaxHeight, setSwiperMaxHeight] = useState<string>();

  useLayoutEffect(() => {
    const handleSwiperMaxHeight = () => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      const singleSlide = (swiper as unknown as HTMLElement).querySelector(
        ".swiper-slide"
      );
      if (!singleSlide) return;

      const singleSlideHeight = (singleSlide as HTMLDivElement).clientHeight;

      if (!swiper.style) return;
      const offset = (SLIDES_PER_VIEW - 1) * SPACE_BETWEEN_SLIDES;
      const swiperMaxHeight = singleSlideHeight * SLIDES_PER_VIEW + offset;

      setSwiperMaxHeight(`${swiperMaxHeight}px`);
    };

    window.addEventListener("resize", handleSwiperMaxHeight);
    handleSwiperMaxHeight();

    return () => window.removeEventListener("resize", handleSwiperMaxHeight);
  }, []);

  return (
    <div className="[&>.swiper]:overflow-visible overflow-y-hidden px-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={SPACE_BETWEEN_SLIDES}
        slidesPerView={SLIDES_PER_VIEW}
        direction="vertical"
        ref={swiperRef}
        style={{
          maxHeight: swiperMaxHeight,
        }}
        className=" [&>.swiper-pagination-vertical.swiper-pagination-bullets]:-right-5 [&_.swiper-pagination-bullets-dynamic]:overflow-visible [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:bg-shade-of-amber"
      >
        {events.map((item) => (
          <SwiperSlide className="event-slide-height" key={item.slug}>
            <EventCard event={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(EventSlider);
