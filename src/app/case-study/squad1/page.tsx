/* eslint-disable @next/next/no-img-element */
//
"use client";
import BorderBody from "@/component/BorderBody";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import whatsapp from "@/lottie-files/WhatsApp (1).json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import squad from "@/lottie-files/Squad-1.json";
import squad2 from "@/lottie-files/Squad-2.json";
import squad3 from "@/lottie-files/Squad-3.json";
import GoTo from "@/component/GoTo";
import Link from "next/link";
import AnimationCon from "@/component/AnimationParent";
import TypingEffect from "@/component/TypingEffect";

function Squad1() {
  return (
    <AnimationCon>
      <BorderBody className="h-[337px]" cross={false}>
        <Header />
      </BorderBody>

      <BorderBody className="">
        <div className="flex justify-between fade_text first">
          <p className="uppercase">
            Squad: Empowering African Businesses through Digital Payments
          </p>
          <div className="sm:w-[480px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              Squad is an online platform that helps business owners create and
            </p>
            <p>manage their own online stores.</p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-5 reveal">
          <p>
            Squad is an online platform that helps business owners create and
            manage their own online stores.
          </p>
        </div>
        <div className="w-full sm:mt-24 mt-14 first">
          <img
            src="/squad_banner.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="sm:flex justify-between fade_text sm:mt-24 mt-14 reveal">
          <p>INTRODUCTION AND DETAILS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <p className="">
              Due to the pandemic, small businesses in Nigeria had to move
              online to survive, using social media as their new storefront. But
              managing payments was tasking. Existing payment options were slow,
              expensive, and hard to use, making it tough for businesses to keep
              up with orders and grow.
            </p>
            <div className="mt-5 reveal">
              <p>Role</p>
              <p>Product designer, Researcher</p>
            </div>
            <div className="mt-5 reveal">
              <p>Methodologies</p>
              <p>
                User Research, Usability Testing, Product Design, Interactive
                Prototype, Stakeholder Management, Design System, Wireframes,
                Design Optimization.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Platform</p>
              <p>Web Application</p>
            </div>
            {/* <div className="mt-5 reveal">
              <p>Timeline</p>
              <p>Q3 2022 - Q1 2023</p>
            </div> */}
            <GoTo
              website={"https://squadco.com/"}
              notion={
                "https://jhud.notion.site/Empowering-African-Businesses-through-Digital-Payments-656b43cfa3ea452c897ed3874ed3d234?pvs=4"
              }
              className="reveal"
            />
          </div>
        </div>
      </BorderBody>

      <BorderBody>
        <div className="sm:w-[481px] m-auto sm:mt-9 mt-6 reveal">
          <p className="text-[#8A8A8A]">BUSINESS GOALS & OBJECTIVES</p>
          <p className="black_text mt-5">
            Merchants needed a simpler, faster, and more reliable way to get
            paid so they could focus on running their businesses without the
            stress of complicated payment systems.{" "}
          </p>
          <p className="black_text mt-4 reveal">
            The goal of the product was to create a seamless, affordable, and
            reliable payment solution tailored to the needs of Nigerian
            merchants transitioning to online business. By offering a fast,
            user-friendly, and comprehensive payment platform, we aimed to
            simplify the payment process, reduce operational stress, and empower
            businesses to scale their operations effectively.
          </p>
          <p className="black_text mt-4 reveal">
            Merchants needed a simpler, faster, and more reliable way to get
            paid so they could focus on running their businesses without the
            stress of complicated payment systems.
          </p>

          <div className="h-[500px] m-auto sm:w-[481px] mt-14 reveal">
            <Lottie
              animationData={whatsapp}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </BorderBody>

      <BorderBody className="">
        <div className="sm:w-[481px] sm:mt-20 mt-8 m-auto reveal">
          <p className="text-[#8A8A8A] uppercase">
            Our 6-12 Month Success Metrics
          </p>
          <p className="black_text mt-3 text-[13px]">
            To ensure the product’s impact and growth, we set clear, measurable
            goals for the first 6-12 months post-launch. Our focus was on two
            key objectives:
          </p>

          <ul className="list-decimal ml-5 font-inter text-[13px] reveal">
            <li className="mt-3">
              Onboard 5,000 business owners within the first 6 months – We aimed
              to empower a significant number of businesses by providing them
              with a payment solution that simplifies their operations and
              supports their growth.
            </li>
            <li className="mt-3">
              Facilitate $120 million in transactions within the first 6
              months – By enabling seamless and reliable payments, we sought to
              drive substantial transaction volume, demonstrating the platform’s
              value to merchants and its potential to transform the digital
              payment landscape.
            </li>
          </ul>
        </div>

        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-24 mt-14 reveal">
          <Lottie animationData={squad} loop={true} className="w-full h-full" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[80%] w-full mt-6 reveal">
          <video
            src="/Squad-%20video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <Lottie
            animationData={squad2}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </BorderBody>

      <BorderBody className="">
        <div className="sm:flex justify-between fade_text reveal">
          <p>DESIGN METHODOLOGY & PROCESS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>Research </p>
              <p>
                We interviewed 50+ business owners and their customers to gain a
                deeper understanding of the challenges, their pain points, and
                objectives.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Team Collaboration</p>
              <p>
                After collecting the recordings from the user interviews, we
                synthesised the data and grouped the findings into themes.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Decision Making</p>
              <p>
                Used dot voting to decide which problems to address for the
                basic version of our product (MVP).
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>How Might We</p>
              <p>
                To align our understanding of user challenges identified during
                research with opportunities for innovative problem-solving.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Wireframes</p>
              <p>
                I created simple wireframes in greyscales to focus on the main
                functions and how it feels to use.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Design System</p>
              <p>
                following the Atomic design system principles, we created atoms,
                molecules, and organisms to develop a robust design system.
              </p>
            </div>
            <div className="mt-5">
              <p>High Fidelity Prototypes </p>
              <p>
                After rounds of explorations and critique with the team on key
                low-fi flows, I converted to high fidelity designs.
              </p>
            </div>
          </div>
        </div>

        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-24 mt-14 reveal">
          <Lottie
            animationData={squad3}
            loop={true}
            className="w-full h-full"
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <img
            src="/squad_banner.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <section className=" sm:mt-[100px] mt-[55px] reveal">
          <div className="sm:w-[481px] m-auto">
            <p className="text-[#8A8A8A] uppercase">Outlining our next steps</p>
            <div className="black_text">
              <div className="mt-5">
                <p>Implementation</p>
                <p>
                  With the high-fidelity prototypes approved, the focus shifts
                  towards turning our design concepts into a tangible reality.
                </p>
              </div>
              <div className="mt-5 reveal">
                <p>Iteration and Refinement</p>
                <p>Iteration is at the core of our design philosophy.</p>
              </div>
              <div className="mt-5 reveal">
                <p>Testing Prototypes</p>
                <p>Rigorous testing of the implemented design is paramount.</p>
              </div>
              <div className="mt-5 reveal">
                <p>Observation and User Feedback</p>
                <p>
                  User observation plays a pivotal role in gauging the
                  real-world usability of the product.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 font-roboto-mono reveal">
              <Link href={"/case-study/squad2"} className="text-[#8A8A8A]">
                <TypingEffect word=" READ ABOUT THE CHALLENGES WE FACED ON THE NEXT PAGE" />
              </Link>
              <HiArrowRight size={16} />
            </div>
          </div>
        </section>
      </BorderBody>
      <Footer className="reveal" />
    </AnimationCon>
  );
}

export default Squad1;
