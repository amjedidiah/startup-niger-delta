import EventList from "@/components/home/events/event-list";
import { EventContextProvider } from "@/contexts/event.context";

export default function Events() {
  return (
    <section className="py-10 lg:pt-[60px] lg:pb-[80px] bg-laurel-green-300">
      <div className="container flex flex-col gap-8 lg:gap-12">
        <header className="flex flex-col items-center text-gable-green gap-8">
          <h2 className="after:bg-shade-of-amber after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-5">
            Events.
          </h2>
          <p className="max-w-[885px] lg:text-lg lg:leading-7 text-center">
            Discover upcoming events, business conferences, trade shows,
            seminars, networking meets, and workshops. Additionally, a list of
            past events within the last 6 months.
          </p>
        </header>

        <EventContextProvider>
          <EventList />
        </EventContextProvider>
      </div>
    </section>
  );
}
