import FundingAlertsSlider from "@/components/home/funding-alerts/funding-alerts-slider";

export default function FundingAlerts() {
  return (
    <section className="py-10 lg:pt-16 lg:pb-28">
      <div className="container flex flex-col gap-[37px]">
        <h2 className="text-gable-green text-center after:-bottom-[18px] after:bg-laurel-green after:left-1/2 after:transform after:-translate-x-1/2">
          Funding Alerts.
        </h2>
        <div className="flex flex-col items-center gap-[52px] lg:gap-[76px] w-full max-w-[1084px] mx-auto">
          <div className="flex items-center w-full max-w-[603px] rounded-[4px] bg-white shadow-funding-alerts-tab">
            <p className="flex-1 text-black text-center text-xs font-semibold lg:leading-[18px] underline py-5">
              TEXT
            </p>
            <p className="flex-1 text-black text-center text-xs font-semibold lg:leading-[18px] underline py-5">
              CATEGORY
            </p>
            <p className="flex-1 text-black text-center text-xs font-semibold lg:leading-[18px] underline py-5">
              YEAR
            </p>
          </div>
          <FundingAlertsSlider />
        </div>
      </div>
    </section>
  );
}
