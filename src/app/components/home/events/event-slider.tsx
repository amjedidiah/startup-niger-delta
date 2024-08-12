"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import EventCard from "@/components/home/events/event-card";
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useEventContext } from "@/contexts/event.context";
import { type Swiper as SwiperType } from "swiper";

const events = [
  {
    slug: "conference",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/conference-1.avif",
    name: "Conference",
    excerpt:
      "Join industry leaders and innovators at our Tech Innovation Summit 2022 for insightful discussions, networking opportunities, and the latest technological trends and developments.",
    registrationLink: "",
    date: new Date("September 27, 2024").getTime(),
  },
  {
    slug: "techpro-workshop",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "TechPro Workshop",
    excerpt:
      "Dive into the fundamentals of data science at our hands-on workshop, featuring expert-led sessions on data analytics, machine learning, and best practices for leveraging data for...",
    registrationLink: "",
    date: new Date("September 27, 2024").getTime(),
  },
  {
    slug: "seminar",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/conference-2.avif",
    name: "Seminar",
    excerpt:
      "Explore the evolving landscape of digital leadership at our seminar, where seasoned executives and experts will share strategies for leading in a tech-driven world.",
    registrationLink: "",
    date: new Date("September 7, 2024").getTime(),
  },
  {
    slug: "panel-discussion",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "Panel Discussion",
    excerpt:
      "Join us for a thought-provoking panel discussion highlighting the contributions of women in the tech industry and fostering opportunities for the next generation of female tech leaders.",
    registrationLink: "",
    date: new Date("August 27, 2024").getTime(),
  },
  {
    slug: "hackathon",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "Hackathon",
    excerpt:
      'Unleash your creativity and problem-solving skills at our "Innovate for Impact" hackathon, where participants will collaborate to develop tech-driven solutions addressing real-world challenges.',
    registrationLink: "",
    date: new Date("August 7, 2024").getTime(),
  },
  {
    slug: "roundtable",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "Roundtable",
    excerpt:
      "Take part in a collaborative discussion focused on strategies for scaling tech startups, featuring insights from successful entrepreneurs, investors, and industry experts.",
    registrationLink: "",
    date: new Date("July 27, 2024").getTime(),
  },
  {
    slug: "networking-mixer",
    startTime: "10:30 am",
    endTime: "3:30 pm",
    src: "/images/workshop-1.avif",
    name: "Networking Mixer",
    excerpt:
      "Connect with like-minded professionals, entrepreneurs, and tech enthusiasts at our networking mixer, offering valuable opportunities to forge new connections and partnerships.",
    registrationLink: "",
    date: new Date("May 27, 2024").getTime(),
  },
];
const mainEvents = events.sort((a, b) => b.date - a.date);

export type Event = (typeof events)[number];

const SPACE_BETWEEN_SLIDES = 20;
const SLIDES_PER_VIEW = 3;

function EventSlider() {
  const swiperRef = useRef<SwiperRef>(null);
  const [swiperMaxHeight, setSwiperMaxHeight] = useState<string>();
  const {
    activeNavItemIndex,
    setActiveNavItemIndex,
    setSwiperInstance,
    setFirstPastEventIndex,
  } = useEventContext();

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

  const changeEventActiveNavItem = useCallback(
    ({ realIndex }: SwiperType) => {
      const currentDate = mainEvents[realIndex].date;
      const newActiveNavItemIndex = currentDate > new Date().getTime() ? 0 : 1;

      if (activeNavItemIndex !== newActiveNavItemIndex)
        setActiveNavItemIndex(newActiveNavItemIndex);
    },
    [activeNavItemIndex, setActiveNavItemIndex]
  );

  useEffect(() => {
    const desiredIndex = mainEvents.findIndex(
      (item) => item.date < new Date().getTime()
    );
    setFirstPastEventIndex(desiredIndex);
  }, [setFirstPastEventIndex]);

  return (
    <div className="[&>.swiper]:overflow-visible overflow-y-hidden px-10 sm:px-6 py-3">
      <Swiper
        onSwiper={setSwiperInstance}
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
        className="[&>.swiper-pagination-vertical.swiper-pagination-bullets]:-right-5 [&_.swiper-pagination-bullets-dynamic]:overflow-visible [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:bg-shade-of-amber"
        onRealIndexChange={changeEventActiveNavItem}
      >
        {mainEvents.map((item, i) => (
          <SwiperSlide
            className="event-slide-height py-2"
            key={`${item.slug}-${i}`}
          >
            <EventCard event={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(EventSlider);
