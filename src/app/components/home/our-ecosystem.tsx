import EcosystemCard from "@/components/home/ecosystem-card";

const individuals = [
  {
    name: "innovators",
    title: "Startups & Innovators",
    content:
      "After completing a quick onboarding process, you will instantly have access to a diverse knowledge and investment platform.",
  },
  {
    name: "facilitators",
    title: "Investors & Facilitators",
    content:
      "Our platform enables you as a fund manager to launch structure and raise capital from your fund for our exclusive pool of startups.",
  },
];

export default function OurEcosystem() {
  return (
    <section
      className="py-10 lg:pt-[46px] lg:pb-[114px] bg-white-smoke-100"
      id="explore"
    >
      <div className="container flex flex-col gap-[116px]">
        <h2 className="text-gable-green text-center relative after:absolute after:-bottom-[18px] after:w-[115px] after:h-[6px] after:bg-shade-of-amber after:left-1/2 after:transform after:-translate-x-1/2">
          Our Ecosystem.
        </h2>
        <div className="flex max-lg:flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-[93px] items-stretch">
          {individuals.map((item) => (
            <EcosystemCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
