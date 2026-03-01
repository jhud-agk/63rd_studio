//
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import TypingEffect from "./TypingEffect";

function GoTo({
  website,
  notion,
  className,
}: {
  website: string;
  notion: string;
  className?: string;
}) {
  return (
    <div className={`mt-5 font-roboto-mono text-[11px] ${className}`}>
      <Link href={website} className="flex items-center gap-3 text-[#8A8A8A]">
        <TypingEffect word="LIVE  WEBSITE" />
        <HiMiniArrowUpRight color="#18181B" size={16} />
      </Link>
      <Link
        href={notion}
        className="flex items-center gap-3 text-[#8A8A8A] mt-2"
      >
        <TypingEffect word="READ FULL CASE STUDY ON NOTION" />{" "}
        <HiMiniArrowUpRight color="#18181B" size={16} />
      </Link>
    </div>
  );
}

export default GoTo;
