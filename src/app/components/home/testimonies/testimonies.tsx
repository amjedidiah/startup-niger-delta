import TestimonySlider from "@/components/home/testimonies/testimony-slider";

export default function Testimonies() {
  return (
    <section className="bg-green-pattern relative">
      <article className="container flex max-md:flex-col gap-5 md:gap-20 md:justify-between">
        <div className="py-10 md:pt-20 md:pb-7 min-w-fit flex flex-col max-md:text-center md:order-2 md:items-end gap-5">
          <h2 className="after:-bottom-3 after:bg-shade-of-amber after:left-1/2 max-md:after:transform max-md:after:-translate-x-1/2 md:after:left-auto md:after:right-0">
            Testimonies.
          </h2>
          <p className="lg:text-xl lg:leading-[34px]">
            What people say about us
          </p>
        </div>
        <div className="py-10 md:pt-20 md:pb-7 overflow-hidden">
          <TestimonySlider />

          <div className="hidden md:block absolute bg-white h-full w-1/2 top-0 left-0" />
          <div className="w-1/2 h-[250%] relative left-1/2 -top-[160%] bg-green-pattern" />
        </div>
      </article>
    </section>
  );
}
