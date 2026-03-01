//
"use client";
import React from "react";
import BorderBody from "./BorderBody";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <BorderBody className="mt-5">
      <div className={`${className} sm:flex justify-between fade_text pb-20`}>
        <p>SELECT NEXT PROJECT</p>
        <div className="sm:w-[510px] black_text exper">
          {pathname !== "/case-study/squad1" && (
            <div className="">
              <Link href={"/case-study/squad1"}>
                Squad: Empowering African Businesses through Digital Payments
              </Link>
            </div>
          )}
          {pathname !== "/case-study/squad2" && (
            <div className="mt-3">
              <Link href={"/case-study/squad2"}>
                Squad 2.0: Navigating Challenges, Elevating User Experiences.
              </Link>
            </div>
          )}
          {pathname !== "/case-study/bumble" && (
            <div className="mt-3">
              <Link href={"/case-study/bumble"}>
                Reimagining Bumbles Profile Sharing Experience
              </Link>
            </div>
          )}
          {pathname !== "/case-study/nhs" && (
            <div className="mt-3">
              <Link href={"/case-study/nhs"}>
                A UX Research Case Study on the NHS App
              </Link>
            </div>
          )}
          {pathname !== "/case-study/doorset-digital" && (
            <div className="mt-3">
              <Link href={"/case-study/doorset-digital"}>
                Usability Evaluation of Our Dorset Digital
              </Link>
            </div>
          )}
        </div>
      </div>
    </BorderBody>
  );
}

export default Footer;
