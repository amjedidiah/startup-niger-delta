import { SNDDoubleCaretRight, SNDSocials } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
  return (
    <section className="bg-green-pattern py-12 xl:pt-14">
      <article className="container grid lg:grid-cols-[5fr,7fr] gap-14 lg:gap-10">
        <div className="flex flex-col gap-4 relative">
          <Link href="/" className="mb-[10px] w-fit">
            <Image
              src="/images/logo-white.png"
              alt="Startup Niger Delta"
              width={208}
              height={65}
              className="max-lg:w-[160px]"
            />
          </Link>
          <p className="text-white font-light">
            We are actively involved in fostering a vibrant network of startups
            dedicated to advancing economic prosperity, preserving cultural
            heritage, and promoting environmental sustainability in the Niger
            Delta Region.
          </p>
          <Link
            href="/signup"
            className="rounded-[5px] bg-gradient-1 py-[0.625rem] px-5 text-white w-fit"
          >
            Get Started
          </Link>

          <Image
            src="/images/footer-arrow.png"
            width={61}
            height={25}
            alt="footer-arrow"
            className="absolute -left-8 -bottom-9 xl:-bottom-5"
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:gap-10 items-start justify-between">
          <div>
            <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12 lg:mb-16">
              Quick Links
            </h5>

            <ul className="flex flex-col">
              <li className="flex items-center gap-[10px]">
                <span>
                  <SNDDoubleCaretRight />
                </span>
                <Link href="#">About</Link>
              </li>
              <li className="flex items-center gap-[10px]">
                <span>
                  <SNDDoubleCaretRight />
                </span>
                <Link href="#">Investors</Link>
              </li>
              <li className="flex items-center gap-[10px]">
                <span>
                  <SNDDoubleCaretRight />
                </span>
                <Link href="#">Event</Link>
              </li>
              <li className="flex items-center gap-[10px]">
                <span>
                  <SNDDoubleCaretRight />
                </span>
                <Link href="#">Funding</Link>
              </li>
              <li className="flex items-center gap-[10px]">
                <span>
                  <SNDDoubleCaretRight />
                </span>
                <Link href="#">Latest Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12 lg:mb-16">
              Contact Info
            </h5>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm">Phone Number</p>
                <p className="text-xs font-light">
                  <a className="block" href="tel:+234902000000000">
                    +234 90 200 000 0000
                  </a>
                  <a
                    className="block"
                    href="mailto:user@startupnigerdelta.gov.ng"
                  >
                    user@startupnigerdelta.gov.ng
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm">Address</p>
                <p className="text-xs font-light">
                  <a className="block" href="#">
                    22 Office Street, Somewhere Lane,
                    <br /> Asaba, Delta,
                    <br /> NG
                  </a>
                </p>
              </div>
              <div className="mt-3">
                <SNDSocials />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12 lg:mb-16">
              Gallery
            </h5>
          </div>
        </div>
      </article>
    </section>
  );
}
