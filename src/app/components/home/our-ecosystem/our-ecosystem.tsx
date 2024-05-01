import EcosystemCard from "@/components/home/our-ecosystem/ecosystem-card";

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
      className="py-10 lg:pt-[46px] lg:pb-[70px] bg-white-smoke-100"
      id="explore"
    >
      <div className="container flex flex-col gap-12 lg:gap-16">
        <h2 className="text-gable-green text-center after:-bottom-[18px] after:bg-shade-of-amber after:left-1/2 after:transform after:-translate-x-1/2">
          Our Ecosystem.
        </h2>
        <div className="flex max-lg:flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 items-stretch">
          {individuals.map((item) => (
            <EcosystemCard key={item.name} ecosystem={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
