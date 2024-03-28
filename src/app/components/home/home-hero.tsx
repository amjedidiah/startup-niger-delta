import { SNDPlay } from "@/lib/icons";
import homeHeroIllustration from "../../../../public/images/home-hero-illustration.svg";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="pt-10 sm:pt-14 lg:h-[728px] lg:max-h-screen overflow-x-hidden">
      <div className="container flex max-lg:flex-col items-center h-full gap-8 sm:gap-12">
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-10 max-lg:text-center max-lg:items-center">
          <hgroup className="font-inter flex flex-col gap-3">
            <h1 className="max-w-[636px] text-tiber text-5xl lg:text-[55px] font-bold leading-[50px] lg:leading-[66px]">
              Niger Delta Innovation Ecosystem
            </h1>
            <h2 className="max-w-[603px] text-dark-red text-3xl lg:text-4xl font-semibold leading-10 lg:leading-[50.4px]">
              Unlocking The Next Startup Innovative & Burgeoning Opportunities
            </h2>
          </hgroup>
          <form className="flex w-full max-w-[467px]">
            <input
              type="email"
              name="email"
              id="subscribeEmail"
              aria-label="email"
              placeholder="username@domainname.com"
              className="flex-1 p-2 sm:py-3 sm:px-8 h-auto rounded-l-[5px] bg-white-smoke placeholder:text-gray-66 font-medium"
            />
            <button className="bg-gradient-2 rounded-r-[5px] py-[14px] px-8 text-white font-semibold">
              Subscribe
            </button>
          </form>
          <button className="mt-2 flex items-center justify-center gap-1 w-[157px] h-12 rounded-[22px] bg-gradient-3 text-white text-sm font-medium leading-[10px]">
            <span>How We Work</span>
            <span>
              <SNDPlay />
            </span>
          </button>
        </div>
        <div className="flex items-center max-lg:flex-1 relative h-full">
          <div className="h-full rounded-tl-[90px] absolute -right-[20%] sm:-right-[40%] md:-right-[75%] lg:-right-0 lg:left-20 top-0 w-[1920px] lg:w-[585px] 2xl:w-[1000px] -z-[1]">
            <div className="h-full w-full relative right-0">
              <Image
                src="/images/home-hero-bg.png"
                alt="hero image"
                fill
                sizes="100%"
              />
            </div>
          </div>
          <Image
            src={homeHeroIllustration}
            alt="hero image"
            className="max-lg:my-8 min-[500px]:max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
