import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import AuthCloseButton from "@/components/shared/auth/auth-close-button";

type Greeting = {
  title: string;
  content: string;
};

type Heading = {
  title: string;
  description: string;
};

type AlternateAction = {
  question: string;
  link: {
    text: string;
    href: string;
  };
};

type Props = {
  illustration: StaticImageData;
  greeting: Greeting;
  heading: Heading;
  alternateAction?: AlternateAction;
};

export default function AuthLayout({
  illustration,
  greeting,
  heading,
  children,
  alternateAction,
}: PropsWithChildren<Props>) {
  return (
    <main className="h-screen max-h-full overflow-hidden">
      <div className="h-screen max-h-full grid xl:grid-cols-2 text-center">
        <div className="h-full overflow-y-scroll flex flex-col items-center px-4 py-16 sm:p-16 xl:pt-20 sm:max-xl:justify-center relative">
          <AuthCloseButton />
          <div className="lg:max-xl:mt-28 xl:w-96 xl:min-h-full xl:flex xl:flex-col">
            <div className="flex-1">
              <div className="inline-flex mb-4 p-2">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={164}
                    height={50}
                  />
                </Link>
              </div>
              <hgroup className="flex flex-col gap-1 mb-6">
                <h1 className="text-tiber text-2xl lg:leading-[28px]">
                  {heading.title}
                </h1>
                <h5 className="text-gray-100 font-normal">
                  {heading.description}
                </h5>
              </hgroup>

              {children}
            </div>

            {alternateAction && (
              <p className="mt-[53px] lg:max-xl:mt-4 text-[13px] leading-[20px]">
                {alternateAction.question}{" "}
                <Link
                  href={alternateAction.link.href}
                  className="text-tiber-200"
                >
                  {alternateAction.link.text}
                </Link>
              </p>
            )}
          </div>
        </div>
        <div className="h-full max-xl:hidden flex flex-col pt-20 pb-[67px] justify-between items-center bg-laurel-green-400">
          <h3 className="max-w-[473px] text-[32px] leading-[38px] text-black">
            <span className="text-tiber-200">{greeting.title}</span>{" "}
            {greeting.content}
          </h3>
          <Image
            src={illustration}
            alt="signup illustration"
            className="py-[34px] px-10"
          />
        </div>
      </div>
    </main>
  );
}
