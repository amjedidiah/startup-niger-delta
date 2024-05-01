import EventListNav from "@/components/home/events/event-list-nav";
import EventSlider from "@/components/home/events/event-slider";

export default function EventList() {
  return (
    <div className="flex flex-col gap-8">
      <EventListNav />
      <EventSlider />
    </div>
  );
}
