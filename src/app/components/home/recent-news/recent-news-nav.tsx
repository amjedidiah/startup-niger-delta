"use client";

import RecentNewsNavItem from "@/components/home/recent-news/recent-news-nav-item";
import { MouseEventHandler, useState } from "react";

const newsCategories = ["latest", "news", "funding"];

export default function RecentNewsNav() {
  const [activeItem, setActiveItem] = useState(newsCategories[0]);

  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const newActiveItem = e.currentTarget.dataset.item;

    if (!newActiveItem || newActiveItem === activeItem) return;
    setActiveItem(newActiveItem);
  };

  return (
    <ul className="flex gap-4 lg:gap-7">
      {newsCategories.map((item) => (
        <RecentNewsNavItem
          key={item}
          item={item}
          activeItem={activeItem}
          onClick={handleOnClick}
        />
      ))}
    </ul>
  );
}
