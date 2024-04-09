"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import fgn from "../../../../public/images/partners/fgn.png";
import dsg from "../../../../public/images/partners/dsg.png";
import { memo } from "react";

const partnerImages = [fgn, dsg];

const Partners = () => {
  return (
    <section className="py-4">
      <Marquee autoFill pauseOnClick pauseOnHover>
        {partnerImages.map((item, i) => (
          <Image src={item} key={i} alt="" className="mx-16" />
        ))}
      </Marquee>
    </section>
  );
};

export default memo(Partners);
