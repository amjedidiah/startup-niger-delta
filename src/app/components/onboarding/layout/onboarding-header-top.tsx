"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

function OnboardingHeaderTop() {
  return (
    <div className="bg-green-pattern-2 py-3">
      <div className="container flex items-center justify-between">
        <Link href="" className="w-fit">
          <Image
            src="/images/logo-white.png"
            alt="Startup Niger Delta"
            width={208}
            height={65}
            className="max-lg:w-[160px]"
          />
        </Link>

        <button
          onClick={() => signOut()}
          className="text-black inline-flex items-center gap-[10px]"
        >
          <span className="text-black font-semibold">Signout</span>
          {/* <span>
            <SNDQuestionMarkCircle />
          </span> */}
        </button>
      </div>
    </div>
  );
}

export default memo(OnboardingHeaderTop);
