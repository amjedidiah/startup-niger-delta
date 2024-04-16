"use client";

import EventListNavItem from "@/components/home/events/event-list-nav-item";
import { eventNavItems } from "@/contexts/event.context";

export default function EventListNav() {
  return (
    <div className="flex justify-between relative after:absolute after:left-0 after:right-0 after:h-1 after:bg-[rgba(195,195,215,0.50)] after:-bottom-[10px]">
      {eventNavItems.map((item) => (
        <EventListNavItem key={item} item={item} />
      ))}
    </div>
  );
}
