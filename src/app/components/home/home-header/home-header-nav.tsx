import ShouldRender from "@/components/shared/should-render";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
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
  const { data: session } = useSession();

  return (
    <div
      className={cn(
        {
          "max-lg:hidden": !isOpen,
          "max-lg:fixed right-0 left-0 top-[89px] max-lg:bg-white max-lg:py-4 max-lg:px-6 max-lg:flex-col max-lg:items-end max-lg:shadow-lg":
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
        <ShouldRender condition={!session}>
          <Link
            href="/signin"
            className="text-gable-green underline w-fit max-lg:ml-auto p-1"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-[5px] bg-gradient-1 py-[0.625rem] px-5 text-white hover:bg-unknown-100"
          >
            Get Started
          </Link>
        </ShouldRender>
        <ShouldRender condition={!!session}>
          <Link
            href="/dashboard"
            className="rounded-[5px] bg-gradient-1 py-[0.625rem] px-5 text-white hover:bg-unknown-100"
          >
            Dashboard
          </Link>
          <button
            onClick={() => signOut()}
            className="rounded-[5px] bg-red-600 py-[0.625rem] px-5 text-white"
          >
            Signout
          </button>
        </ShouldRender>
      </div>
    </div>
  );
}
