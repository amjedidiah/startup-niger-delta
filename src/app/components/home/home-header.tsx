"use client";
import Image from "next/image";
import HomeHeaderNav from "@/components/home/home-header-nav";
import { memo, useCallback, useState } from "react";
import { Link } from "react-scroll";
import { RiMenu3Line } from "react-icons/ri";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="border-b-[1.5px] border-gray-85 bg-white fixed left-0 top-0 w-full z-10">
      <div className="container">
        <div className="flex items-center justify-between gap-10 lg:gap-12 xl:gap-[102px] py-3 h-[88px] ">
          <Link to="home" smooth offset={-88} className="cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Startup Niger Delta"
              width={207.7}
              height={64.241}
            />
          </Link>

          <HomeHeaderNav isOpen={isMenuOpen} />
          <button
            className="lg:hidden text-2xl border border-grey py-3 px-4 rounded-md text-grey"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(HomeHeader);