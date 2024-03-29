import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const navLinks = [
  { title: "Home", href: "home" },
  { title: "Explore", href: "explore" },
  { title: "Funding", href: "funding" },
  { title: "Reports", href: "reports" },
  { title: "News", href: "news" },
  { title: "Events", href: "events" },
  { title: "FAQ", href: "faq" },
];

type Props = {
  isOpen: boolean;
};

export default function HomeHeaderNav({ isOpen }: Props) {
  return (
    <div
      className={cn(
        {
          "max-lg:hidden": !isOpen,
          "max-lg:fixed right-0 left-0 top-[90px] max-lg:bg-white max-lg:py-4 max-lg:px-6 max-lg:flex-col max-lg:items-end max-lg:shadow-md":
            isOpen,
        },
        "flex items-center justify-between flex-1 gap-4 lg:gap-6 xl:gap-[42px]"
      )}
    >
      <ul
        className={cn(
          {
            "max-lg:flex-col": isOpen,
          },
          "flex items-end gap-4 lg:gap-6 xl:gap-[42px]"
        )}
      >
        {navLinks.map(({ title, href }) => (
          <li key={title}>
            <ScrollLink
              to={href}
              className="text-gable-green cursor-pointer"
              activeClass="text-laurel-green"
              smooth
              spy
              offset={-88}
            >
              {title}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className="flex max-lg:flex-col lg:items-center gap-4 text-sm">
        <Link href="/signin" className="text-gable-green underline text-right">
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-[5px] bg-gradient-1 py-[0.625rem] px-5 text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
