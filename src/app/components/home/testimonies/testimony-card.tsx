import { SNDStar } from "@/lib/icons";
import Image from "next/image";

type Props = {
  testimony: {
    person: {
      name: string;
      title: string;
      avatar: string;
    };
    rating: number;
    content: string;
  };
};

export default function TestimonyCard({
  testimony: { person, rating, content },
}: Props) {
  return (
    <div className="bg-white relative p-6 sm:p-10 md:flex-1">
      <Image
        src="/images/quote.png"
        alt="quote"
        width={196}
        height={146}
        className="absolute right-6 sm:right-10 top-7 sm:top-11 w-8 lg:w-12"
      />
      <div className="flex flex-col gap-4 max-w-[507px] mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src={person.avatar}
            alt="avatar"
            width={75}
            height={75}
            className="rounded-full flex-shrink-0 h-fit"
          />
          <div className="flex-1 flex flex-col gap-2 justify-between">
            <span className="inline-flex">
              {Array(rating)
                .fill(0)
                .map((_rating, i) => (
                  <SNDStar key={i} />
                ))}
            </span>
            <hgroup>
              <h3 className="text-gable-green text-lg lg:text-xl font-semibold">
                {person.name}
              </h3>
              <h5 className="text-shade-of-amber text-sm ">{person.title}</h5>
            </hgroup>
          </div>
        </div>
        <p className="text-gable-green text-sm opacity-50">{content}</p>
      </div>
    </div>
  );
}
