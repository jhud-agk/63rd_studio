/* eslint-disable @next/next/no-img-element */
//
"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
// import Lottie from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
type ShortType = {
  brand: string;
  className?: string;
  imgClass?: string;
  textClass?: string;
  animation?: unknown;
  url?: string;
  // externalUrl?: string;
  image?: string;
};

function ShortInfo(props: ShortType) {
  return (
    <div className={`${props.className} phone:mt-0 mt-8`}>
      <Link href={`/case-study${props.url}`} className={` black_text`}>
        {props.animation ? (
          <Lottie
            animationData={props.animation}
            loop={true}
            className={`${props.imgClass!} w-full h-full`}
          />
        ) : (
          <img
            src={props.image}
            alt=""
            className={`object-cover w-full h-full ${props.imgClass}`}
          />
        )}
        <div className={`${props.textClass} text-[11px]`}>
          <p className="pt-3 uppercase font-roboto-mono">{props.brand}</p>
          {/* <p className="mt-1">{props.info}</p>
          <p className="mt-2 text-[#8A8A8A]">{props.role}</p> */}
          {/* <p>{props.period}</p> */}
        </div>
      </Link>
    </div>
  );
}

export default ShortInfo;
