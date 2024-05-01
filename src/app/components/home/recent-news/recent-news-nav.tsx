"use client";

import RecentNewsNavItem from "@/components/home/recent-news/recent-news-nav-item";
import { MouseEventHandler, memo, useCallback, useState } from "react";

const newsCategories = ["latest", "news", "funding"];

function RecentNewsNav() {
  const [activeItem, setActiveItem] = useState(newsCategories[0]);

  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      e.preventDefault();
      const newActiveItem = e.currentTarget.dataset.item as string;

      if (newActiveItem !== activeItem) setActiveItem(newActiveItem);
    },
    [activeItem]
  );

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

export default memo(RecentNewsNav);