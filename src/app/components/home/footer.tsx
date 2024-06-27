import { SNDDoubleCaretRight } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="bg-green-pattern py-12 xl:pt-14">
        <article className="container grid lg:grid-cols-[5fr,7fr] gap-14 lg:gap-10">
          <div className="flex flex-col gap-4 relative">
            <Link href="/" className="mb-[10px] w-fit">
              <Image
                src="/images/logo-white.png"
                alt="Startup Niger Delta"
                width={640}
                height={198}
                className="w-[160px]"
              />
            </Link>
            <p className="text-white font-light">
              We are actively involved in fostering a vibrant network of
              startups dedicated to advancing economic prosperity, preserving
              cultural heritage, and promoting environmental sustainability in
              the Niger Delta Region.
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
              <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12">
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
              <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="151"
                    height="21"
                    viewBox="0 0 151 21"
                    fill="none"
                  >
                    <path
                      d="M61.5706 0.699463H44.904C44.4619 0.699463 44.038 0.875058 43.7255 1.18762C43.4129 1.50018 43.2373 1.9241 43.2373 2.36613V19.0328C43.2373 19.4748 43.4129 19.8987 43.7255 20.2113C44.038 20.5239 44.4619 20.6995 44.904 20.6995H61.5706C62.0127 20.6995 62.4366 20.5239 62.7491 20.2113C63.0617 19.8987 63.2373 19.4748 63.2373 19.0328V2.36613C63.2373 1.9241 63.0617 1.50018 62.7491 1.18762C62.4366 0.875058 62.0127 0.699463 61.5706 0.699463ZM58.8269 15.1099C58.9043 15.1873 58.9657 15.2792 59.0076 15.3804C59.0495 15.4815 59.0711 15.59 59.0711 15.6995C59.0711 15.809 59.0495 15.9174 59.0076 16.0185C58.9657 16.1197 58.9043 16.2116 58.8269 16.289C58.7495 16.3665 58.6575 16.4279 58.5564 16.4698C58.4552 16.5117 58.3468 16.5333 58.2373 16.5333C58.1278 16.5333 58.0194 16.5117 57.9182 16.4698C57.8171 16.4279 57.7251 16.3665 57.6477 16.289L53.2373 11.8776L48.8269 16.289C48.6705 16.4454 48.4584 16.5333 48.2373 16.5333C48.0162 16.5333 47.8041 16.4454 47.6477 16.289C47.4914 16.1327 47.4035 15.9206 47.4035 15.6995C47.4035 15.4783 47.4914 15.2662 47.6477 15.1099L52.0592 10.6995L47.6477 6.28905C47.4914 6.13268 47.4035 5.9206 47.4035 5.69946C47.4035 5.47833 47.4914 5.26625 47.6477 5.10988C47.8041 4.95351 48.0162 4.86567 48.2373 4.86567C48.4584 4.86567 48.6705 4.95351 48.8269 5.10988L53.2373 9.52134L57.6477 5.10988C57.8041 4.95351 58.0162 4.86567 58.2373 4.86567C58.4584 4.86567 58.6705 4.95351 58.8269 5.10988C58.9833 5.26625 59.0711 5.47833 59.0711 5.69946C59.0711 5.9206 58.9833 6.13268 58.8269 6.28905L54.4154 10.6995L58.8269 15.1099Z"
                      fill="white"
                    />
                    <path
                      d="M97.5007 0.700693C98.2304 0.697893 98.9601 0.705227 99.6896 0.722693L99.8835 0.729692C100.108 0.737692 100.329 0.747692 100.596 0.759691C101.659 0.80969 102.385 0.977684 103.022 1.22468C103.682 1.47867 104.238 1.82265 104.794 2.37864C105.303 2.87823 105.696 3.48255 105.947 4.14958C106.194 4.78655 106.362 5.51353 106.412 6.57749C106.424 6.84348 106.434 7.06548 106.442 7.28947L106.448 7.48346C106.466 8.21263 106.474 8.94201 106.471 9.67139L106.472 10.4174V11.7273C106.475 12.457 106.467 13.1867 106.449 13.9162L106.443 14.1102C106.435 14.3342 106.425 14.5552 106.413 14.8222C106.363 15.8862 106.193 16.6122 105.947 17.2491C105.697 17.9169 105.303 18.5217 104.794 19.0211C104.294 19.5294 103.69 19.9228 103.022 20.174C102.385 20.421 101.659 20.589 100.596 20.639C100.329 20.651 100.108 20.661 99.8835 20.669L99.6896 20.675C98.9601 20.6928 98.2304 20.7005 97.5007 20.698L96.7547 20.699H95.4458C94.7161 20.7015 93.9864 20.6938 93.2569 20.676L93.0629 20.67C92.8255 20.6614 92.5882 20.6514 92.3509 20.64C91.287 20.59 90.561 20.42 89.9231 20.174C89.2558 19.9234 88.6514 19.5299 88.1521 19.0211C87.6432 18.5214 87.2494 17.9167 86.9982 17.2491C86.7512 16.6122 86.5832 15.8862 86.5332 14.8222C86.5221 14.5849 86.5121 14.3476 86.5032 14.1102L86.4982 13.9162C86.4798 13.1868 86.4715 12.457 86.4732 11.7273V9.67139C86.4704 8.94201 86.4778 8.21263 86.4952 7.48346L86.5022 7.28947C86.5102 7.06548 86.5202 6.84348 86.5322 6.57749C86.5822 5.51253 86.7502 4.78755 86.9972 4.14958C87.2486 3.48222 87.6431 2.87806 88.1531 2.37964C88.652 1.87041 89.2561 1.47624 89.9231 1.22468C90.561 0.977684 91.286 0.80969 92.3509 0.759691L93.0629 0.729692L93.2569 0.724693C93.986 0.706266 94.7154 0.697932 95.4448 0.699693L97.5007 0.700693ZM96.4727 5.70052C95.8103 5.69115 95.1525 5.81354 94.5378 6.06058C93.923 6.30761 93.3635 6.67437 92.8917 7.13953C92.42 7.60469 92.0453 8.15898 91.7896 8.77018C91.5339 9.38139 91.4023 10.0373 91.4023 10.6999C91.4023 11.3624 91.5339 12.0183 91.7896 12.6295C92.0453 13.2407 92.42 13.795 92.8917 14.2602C93.3635 14.7253 93.923 15.0921 94.5378 15.3391C95.1525 15.5862 95.8103 15.7086 96.4727 15.6992C97.7987 15.6992 99.0704 15.1724 100.008 14.2348C100.946 13.2971 101.472 12.0254 101.472 10.6994C101.472 9.37332 100.946 8.10159 100.008 7.16394C99.0704 6.22629 97.7987 5.70052 96.4727 5.70052ZM96.4727 7.70046C96.8712 7.69311 97.2672 7.76525 97.6375 7.91265C98.0078 8.06006 98.345 8.27978 98.6294 8.55897C98.9138 8.83816 99.1398 9.17124 99.294 9.53873C99.4483 9.90623 99.5278 10.3008 99.5278 10.6993C99.5279 11.0979 99.4485 11.4925 99.2944 11.86C99.1403 12.2276 98.9144 12.5607 98.6301 12.84C98.3458 13.1193 98.0086 13.3391 97.6384 13.4867C97.2681 13.6342 96.8722 13.7065 96.4737 13.6993C95.6781 13.6993 94.9151 13.3832 94.3525 12.8206C93.7899 12.258 93.4739 11.495 93.4739 10.6994C93.4739 9.90373 93.7899 9.14069 94.3525 8.5781C94.9151 8.01551 95.6781 7.69945 96.4737 7.69945L96.4727 7.70046ZM101.722 4.20057C101.4 4.21349 101.095 4.35072 100.871 4.58353C100.647 4.81635 100.523 5.12668 100.523 5.44953C100.523 5.77239 100.647 6.08272 100.871 6.31553C101.095 6.54834 101.4 6.68558 101.722 6.69849C102.054 6.69849 102.372 6.5668 102.606 6.33239C102.841 6.09797 102.972 5.78004 102.972 5.44853C102.972 5.11702 102.841 4.79909 102.606 4.56468C102.372 4.33027 102.054 4.19857 101.722 4.19857V4.20057Z"
                      fill="white"
                    />
                    <path
                      d="M18.9 0.699463H1.1C0.808262 0.699463 0.528473 0.815356 0.322183 1.02165C0.115893 1.22794 0 1.50772 0 1.79946V19.5995C0 19.8912 0.115893 20.171 0.322183 20.3773C0.528473 20.5836 0.808262 20.6995 1.1 20.6995H10.68V12.9495H8.08V9.94946H10.68V7.69946C10.6261 7.17122 10.6885 6.63759 10.8627 6.136C11.0369 5.63441 11.3188 5.17701 11.6885 4.79587C12.0582 4.41474 12.5068 4.1191 13.0028 3.9297C13.4989 3.7403 14.0304 3.66171 14.56 3.69946C15.3383 3.69467 16.1163 3.73474 16.89 3.81946V6.51946H15.3C14.04 6.51946 13.8 7.11946 13.8 7.98946V9.91946H16.8L16.41 12.9195H13.8V20.6995H18.9C19.0445 20.6995 19.1875 20.671 19.321 20.6157C19.4544 20.5604 19.5757 20.4794 19.6778 20.3773C19.78 20.2751 19.861 20.1539 19.9163 20.0204C19.9715 19.887 20 19.7439 20 19.5995V1.79946C20 1.65501 19.9715 1.51197 19.9163 1.37851C19.861 1.24505 19.78 1.12379 19.6778 1.02165C19.5757 0.919501 19.4544 0.838476 19.321 0.783195C19.1875 0.727915 19.0445 0.699463 18.9 0.699463Z"
                      fill="white"
                    />
                    <path
                      d="M148.547 0.699463C149.137 0.699463 149.702 0.933589 150.119 1.35034C150.535 1.76708 150.77 2.33232 150.77 2.92169V18.4772C150.77 19.0666 150.535 19.6318 150.119 20.0486C149.702 20.4653 149.137 20.6995 148.547 20.6995H132.992C132.402 20.6995 131.837 20.4653 131.42 20.0486C131.004 19.6318 130.77 19.0666 130.77 18.4772V2.92169C130.77 2.33232 131.004 1.76708 131.42 1.35034C131.837 0.933589 132.402 0.699463 132.992 0.699463H148.547ZM147.992 17.9217V12.0328C147.992 11.0721 147.61 10.1508 146.931 9.4715C146.252 8.7922 145.33 8.41057 144.37 8.41057C143.425 8.41057 142.325 8.98835 141.792 9.85502V8.62169H138.692V17.9217H141.792V12.4439C141.792 11.5884 142.481 10.8884 143.336 10.8884C143.749 10.8884 144.144 11.0522 144.436 11.344C144.728 11.6357 144.892 12.0313 144.892 12.4439V17.9217H147.992ZM135.081 6.87724C135.576 6.87724 136.051 6.68058 136.401 6.33051C136.751 5.98044 136.947 5.50565 136.947 5.01057C136.947 3.97724 136.114 3.1328 135.081 3.1328C134.583 3.1328 134.105 3.33063 133.753 3.68278C133.401 4.03494 133.203 4.51256 133.203 5.01057C133.203 6.04391 134.047 6.87724 135.081 6.87724ZM136.625 17.9217V8.62169H133.547V17.9217H136.625Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold relative after:absolute after:w-[34px] after:h-[3px] after:bg-shade-of-amber after:left-0 after:-bottom-4 mb-8 sm:mb-12">
                Gallery
              </h5>
            </div>
          </div>
        </article>
      </section>
      <section className="bg-unknown-400">
        <article className="container flex max-sm:flex-col-reverse items-center justify-between py-[10px]">
          <p className="text-white text-xs font-light">
            Copyright © Startup Niger Delta right reserved
          </p>

          <ul className="inline-flex gap-5 md:gap-10">
            <li>
              <Link className="text-white text-xs font-light" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-xs font-light"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-white text-xs font-light" href="/services">
                Services
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}
