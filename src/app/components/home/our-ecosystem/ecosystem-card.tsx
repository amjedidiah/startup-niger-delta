import { cn } from "@/lib/utils";
import OrangeButton from "@/components/shared/orange-button";
import Image from "next/image";

type Props = {
  ecosystem: {
    name: string;
    title: string;
    content: string;
  };
};

export default function EcosystemCard({
  ecosystem: { name, title, content },
}: Props) {
  const isFacilitator = name === "facilitators";

  return (
    <div
      key={name}
      className={cn(
        {
          "text-white bg-[url('/images/bg-innovators.png')]": !isFacilitator,
          "text-gable-green bg-[url('/images/bg-facilitators.png')]":
            isFacilitator,
        },
        "flex-1 basis-[280px] max-w-[320px] lg:max-w-[420px] px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col justify-between bg-cover bg-no-repeat bg-center rounded-[30px] overflow-hidden"
      )}
    >
      <div
        className={cn("h-[10px] mb-6 lg:mb-8", {
          "bg-laurel-green": !isFacilitator,
          "bg-gable-green": isFacilitator,
        })}
      />
      <h3 className="text-serif font-bold mb-2 lg:mb-4">{title}</h3>
      <p className="text-sm lg:mb-2">{content}</p>
      <div className="flex max-lg:flex-col lg:items-end lg:justify-between gap-1 mt-3">
        <OrangeButton className="px-6 max-lg:py-2 relative lg:-top-12 w-[150px] min-w-[150px]">
          Meet them
        </OrangeButton>
        <Image
          src={`/images/${name}.png`}
          alt={name}
          width={268}
          height={210}
          className="max-lg:ml-auto max-lg:w-[180px] lg:w-[210px]"
        />
      </div>
    </div>
  );
}
