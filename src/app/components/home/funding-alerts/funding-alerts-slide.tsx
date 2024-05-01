import Image from "next/image";
import { FundingAlertType } from "@/components/home/funding-alerts/funding-alerts-slider";
import { currentYear } from "@/lib/constants";
import { memo, useMemo } from "react";
import OrangeButton from "@/components/shared/orange-button";
import { cn } from "@/lib/utils";
import { useSwiperSlide } from "swiper/react";
import FundItem from "@/components/home/funding-alerts/fund-item";
import CompanyInfoItem from "@/components/home/funding-alerts/company-info-item";

function FundingAlertsSlide({
  company: { logo, name, geography, industry },
  fundNumber,
  fundManager,
  amount,
  reference,
}: Pick<
  FundingAlertType,
  "company" | "fundNumber" | "fundManager" | "amount" | "reference"
>) {
  const swiperSlide = useSwiperSlide();

  const formattedAmount = useMemo(() => {
    let unit = "";
    let value = amount;
    if (value >= 1e6) {
      unit = "M";
      value /= 1e6;
    } else if (value >= 1e3) {
      unit = "K";
      value /= 1e3;
    }

    return (
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        compactDisplay: "short",
      }).format(value) + unit
    );
  }, [amount]);

  return (
    <div
      className={cn(
        "flex flex-col p-4 lg:py-7 gap-[14px] text-gable-green  rounded-[11px] bg-white border-funding-alert-slide shadow-funding-alert-slide",
        {
          "w-[352px]": swiperSlide.isActive,
          "opacity-50 scale-[.8] w-[310px]": !swiperSlide.isActive,
        }
      )}
    >
      <div className="relative w-[154px] h-[45px] lg:mt-[7px] mx-auto">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="100%"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <p className="text-center font-semibold">{name}</p>
      <div className="flex gap-4 text-xs text-center">
        <FundItem title="Fund Number" value={fundNumber} />
        <FundItem title="Fund Manager" value={fundManager} />
      </div>
      <p className="mt-4 text-center text-xl lg:text-2xl font-semibold">
        {formattedAmount}
      </p>
      <div className="flex flex-col text-xs font-semibold lg:[&_p]:leading-[17px] w-[275px] mx-auto -mt-3 relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:w-full after:h-[11px] after:rounded-[4px] after:bg-gray-300 ">
        <p className="flex justify-between uppercase text-gable-green-400">
          <span>RAISED</span>
          <span>{currentYear}</span>
        </p>
      </div>
      <div className="mt-[25px] text-xs flex">
        <CompanyInfoItem title="Geography" value={geography} />
        <CompanyInfoItem
          title="Reference"
          value={reference}
          className="flex-1 text-center"
        />
        <CompanyInfoItem
          title="Industry focus"
          value={industry}
          className="flex-1 text-end"
        />
      </div>
      <div className="mt-[10px] flex justify-center">
        <OrangeButton className="py-[10px]">Learn More</OrangeButton>
      </div>
    </div>
  );
}

export default memo(FundingAlertsSlide);
