//

import AnimationCon from "@/component/AnimationParent";
import BorderBody from "@/component/BorderBody";
import Header from "@/component/Header";
import TypingEffect from "@/component/TypingEffect";
import Link from "next/link";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

function About() {
  return (
    <AnimationCon>
      <BorderBody className="h-[267px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="sm:flex justify-between fade_text first">
          <p>ABOUT</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <p className="font-semibold">
              We started because we kept seeing the same problem.
            </p>
            <p className="mt-5">
              Companies would hire us to redesign their website, and we&apos;d
              deliver something beautiful, intuitive, and conversion-optimised.
              But then customers would visit their physical store and find a
              completely different experience. Or they&apos;d call customer
              service and hear information that contradicted what the website
              promised.
            </p>
            <div className="mt-5">
              <p>
                Great websites don&apos;t exist in isolation. They&apos;re part
                of a complete customer journey that spans digital, physical, and
                human touchpoints. That&apos;s why we built our studio
                differently. We combine 7 years of hands-on UX design and
                Omnichannel Marketing expertise to create websites that
                don&apos;t just look good, they work seamlessly within your
                entire customer experience ecosystem.
              </p>
            </div>
            <div className="mt-5">
              <p>
                Whether you need a stunning website redesign or a comprehensive
                audit of how all your customer touchpoints work together, we
                bring both the creative execution and strategic thinking to make
                it happen. We&apos;re not just designers. We&apos;re experience
                architects who understand the full picture.
              </p>
            </div>

            <p className="font-semibold mt-5">Who we serve:</p>
            <div className="mt-5">
              <p>
                Mid-market companies in retail, hospitality, healthcare, and
                service industries, businesses with 2-10 customer touchpoints
                who know that consistency matters. We&apos;re small enough to
                care deeply about your success, experienced enough to deliver
                transformational results, and uniquely positioned to see the
                full picture of your customer experience.
              </p>
            </div>

            <div className="mt-10 font-roboto-mono text-xs">
              <Link
                href={"https://www.linkedin.com/company/63rd-studio/about"}
                target="_blank"
                className="flex items-center gap-2 text-[#8A8A8A]"
              >
                <TypingEffect word="LINKEDIN" />
                <HiMiniArrowUpRight color="#18181B" size={16} />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/63rd_studio?igsh=MXJ2dXZ1NmtleTZicQ%3D%3D&utm_source=qr"
                }
                target="_blank"
                className="flex items-center gap-2 text-[#8A8A8A] mt-2 mb-60"
              >
                <TypingEffect word="INSTAGRAM" />
                <HiMiniArrowUpRight color="#18181B" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </BorderBody>
    </AnimationCon>
  );
}

export default About;
