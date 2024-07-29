"use client";
import { SNDClose } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { memo } from "react";

const AuthCloseButton = () => {
  const router = useRouter();
  const handleClose = () => router.push("/", { scroll: false });

  return (
    <span
      className="absolute top-6 sm:top-[27px] right-4 sm:right-10 p-2 cursor-pointer"
      onClick={handleClose}
    >
      <SNDClose />
    </span>
  );
};

export default memo(AuthCloseButton);
