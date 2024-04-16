import EventListNav from "@/components/home/events/event-list-nav";
import EventCard from "@/components/home/events/event-card";

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

export default function EventList() {
  const event = events[0];

  return (
    <div className="flex flex-col gap-8">
      <EventListNav />

      <EventCard {...event} />
    </div>
  );
}
