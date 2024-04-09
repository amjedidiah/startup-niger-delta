import { SNDPlay } from "@/lib/icons";
import homeHeroIllustration from "../../../../public/images/home-hero-illustration.svg";
import Image from "next/image";
import OrangeButton from "@/components/shared/orange-button";

const howWeWorkVideoLink = "";

export default function HomeHero() {
  return (
    <section
      className="pt-10 sm:pt-14 lg:h-[637px] lg:max-h-screen overflow-x-hidden"
      id="home"
    >
      <div className="container flex max-lg:flex-col items-center h-full gap-8 sm:gap-12">
        <div className="flex-1 flex flex-col gap-6 sm:gap-7 lg:gap-9 max-lg:text-center max-lg:items-center">
          <hgroup className="font-inter flex flex-col gap-3 md:gap-4">
            <h1 className="max-w-[636px] text-tiber text-3xl md:text-[44px] lg:text-5xl font-bold md:leading-tight">
              Niger Delta Innovation Ecosystem
            </h1>
            <p className="max-w-[603px] text-dark-red md:text-lg lg:text-xl font-semibold max-sm:px-9">
              Unlocking startups, innovations & burgeoning opportunities in the
              Niger Delta region.
            </p>
          </hgroup>
          <form className="w-4/5 max-w-[467px]">
            <p className="font-light">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                name="email"
                id="subscribeEmail"
                aria-label="email"
                placeholder="username@domainname.com"
                className="max-sm:w-full sm:flex-1 p-2 sm:py-3 sm:px-8 h-auto rounded-l-[5px] bg-white-smoke placeholder:text-gray-66 outline-none shadow-none"
              />
              <OrangeButton className="rounded-l-none max-sm:py-2 max-sm:px-4">
                Subscribe
              </OrangeButton>
            </div>
          </form>

          {howWeWorkVideoLink && (
            <a href={howWeWorkVideoLink} className="w-4/5 max-w-[467px] h-12">
              <button className="flex items-center justify-center gap-3 h-full w-full rounded-[22px] bg-gradient-3 text-white text-sm leading-[10px]">
                <span>How We Work</span>
                <span>
                  <SNDPlay />
                </span>
              </button>
            </a>
          )}
        </div>
        <div className="flex items-center max-lg:flex-1 relative h-full">
          <div className="h-full rounded-tl-[90px] absolute -right-[20%] sm:-right-[40%] md:-right-[75%] lg:-right-0 lg:left-20 top-0 w-[1920px] lg:w-[585px] 2xl:w-[1000px] -z-[1]">
            <div className="h-full w-full relative right-0">
              <Image
                src="/images/home-hero-bg.png"
                alt="hero image"
                fill
                sizes="100%"
                priority
              />
            </div>
          </div>
          <Image
            src={homeHeroIllustration}
            alt="hero image"
            className="max-lg:my-6 max-lg:w-4/5 max-lg:max-w-[467px] max-lg:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
