import { cn } from "@/lib/utils";
import OrangeButton from "@/components/shared/orange-button";
import Image from "next/image";

type Props = {
  name: string;
  title: string;
  content: string;
};

export default function EcosystemCard({ name, title, content }: Props) {
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
        "basis-[506px] flex-grow-0 px-8 lg:px-[50px] flex flex-col justify-between bg-cover bg-no-repeat bg-center rounded-[30px] overflow-hidden"
      )}
    >
      <div
        className={cn("h-[10px] mb-[42px]", {
          "bg-laurel-green": !isFacilitator,
          "bg-gable-green": isFacilitator,
        })}
      />
      <h4 className="text-serif text-3xl lg:text-[37px] font-bold lg:leading-[51px] mb-[31px]">
        {title}
      </h4>
      <p className="text-sm lg:leading-[31px]">{content}</p>
      <div className="flex max-sm:flex-col sm:items-end sm:justify-between gap-0 max-sm:mt-8 max-sm:gap-4">
        <OrangeButton className="px-6 relative sm:-top-12 w-[150px] min-w-[150px]">
          Meet them
        </OrangeButton>
        <Image
          src={`/images/${name}.png`}
          alt={name}
          width={268}
          height={210}
          className="max-sm:ml-auto"
        />
      </div>
    </div>
  );
}
