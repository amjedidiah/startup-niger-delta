import Link from "next/link";

export default function FooterBottom() {
  return (
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
  );
}
