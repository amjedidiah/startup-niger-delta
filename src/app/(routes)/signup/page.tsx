import Image from "next/image";
import signupIllustration from "../../../../public/images/signup-illustration.png";
import { SNDAppleIcon, SNDGoogleIcon } from "@/lib/icons";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="h-screen max-h-full overflow-hidden">
      <div className="h-screen max-h-full grid xl:grid-cols-2 text-center">
        <div className="h-full overflow-y-scroll flex flex-col items-center p-14 xl:pt-20 sm:max-xl:justify-center">
          <div className="xl:w-[350px]">
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
                Create an account
              </h1>
              <h5 className="text-gray-100 font-normal">
                Let&apos;s get started with getting you in
              </h5>
            </hgroup>

            <form className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-black text-sm leading-[4px] text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-[5px] border border-tiber-300 py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
                  placeholder="Enter your names"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-black text-sm leading-[4px] text-left"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-[5px] border border-tiber-300 py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-black text-sm leading-[4px] text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="rounded-[5px] border border-tiber-300 py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
                  placeholder="Enter password"
                />
              </div>

              <button className="mt-1 py-2 bg-gradient-4 border border-tiber-200 text-white rounded-[5px]">
                Sign up with email
              </button>
            </form>

            <p className="mt-8 mb-6 xl:my-5 xl:pb-0 text-gray-100 text-xs font-normal leading-[18px] relative before:absolute before:bottom-2 before:left-0 before:w-[45%] before:h-[1px] before:bg-[rgba(149,149,160,0.30)] after:absolute after:bottom-2 after:right-0 after:w-[45%] after:h-[1px] after:bg-[rgba(149,149,160,0.30)]">
              OR
            </p>

            <div className="flex flex-col gap-[10px]">
              <button className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 ">
                <span>
                  <SNDAppleIcon />
                </span>
                <span>Continue with Apple</span>
              </button>
              <button className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 ">
                <span>
                  <SNDGoogleIcon />
                </span>
                <span>Continue with Google</span>
              </button>
              <p className="text-gray-100 text-[13px] leading-[20px] text-center">
                By clicking the button above, you agree to our Terms of Use and
                Privacy Policy
              </p>

              <p className="mt-[43px] xl:mt-4 text-[13px] leading-[20px]">
                Already have an account?
                <Link href="signin" className="text-tiber-200">
                  {" "}
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="h-full max-xl:hidden flex flex-col pt-20 pb-[67px] justify-between items-center bg-laurel-green-400">
          <h4 className="max-w-[473px] text-[32px] leading-[38px] text-black">
            <span className="text-tiber-200">Welcome!</span> Join our next list
            of Niger Delta innovation ecosystem.
          </h4>
          <Image
            src={signupIllustration}
            alt="signup illustration"
            className="py-[34px] px-10"
          />
        </div>
      </div>
    </main>
  );
}
