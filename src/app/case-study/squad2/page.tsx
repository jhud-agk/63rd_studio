/* eslint-disable @next/next/no-img-element */
//
"use client";
import BorderBody from "@/component/BorderBody";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import trans from "@/lottie-files/transaction graph.json";
import wire from "@/lottie-files/Wireframe-1 (onboarding).json";
import wire2 from "@/lottie-files/wireframe-2 (transaction).json";
import squad2 from "@/lottie-files/Squad 2.0 -1.json";
import squad2w from "@/lottie-files/Squad 2.0 - wiraframe reels.json";
import dynamic from "next/dynamic";
import GoTo from "@/component/GoTo";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Link from "next/link";
import AnimationCon from "@/component/AnimationParent";
import TypingEffect from "@/component/TypingEffect";

function Squad2() {
  return (
    <AnimationCon>
      <BorderBody className="h-[337px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text first">
          <p className="uppercase">
            Squad 2.0: Navigating Challenges, Elevating User Experiences.
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
              We launched our payment platform with big goals but didn’t meet
              them. This case study looks at why, listens to user feedback, and
              finds ways to fix the issues. To further understand the reasons
              behind the problems, we conducted extensive user research to
              discover pain points, adoption challenges, and market constraints.
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
                "https://jhud.notion.site/Squad-2-0-Navigating-Challenges-Elevating-User-Experiences-d8bcd6ffdfe445128b5c31246da9eb80?pvs=4"
              }
              className="reveal"
            />
          </div>
        </div>
      </BorderBody>

      <BorderBody>
        <div className="sm:w-[481px] m-auto mt-10 reveal">
          <p className="text-[#8A8A8A]">WHAT WERE OUR GOALS</p>
          <p className="black_text mt-3">
            The goal of this project is to identify and address the reasons why
            our payment platform didn’t meet its initial targets, such as
            onboarding 5,000 merchants and processing $120 million in
            transactions within 6 months.
          </p>
          <p className="black_text mt-3 reveal">
            Through research, feedback, and testing, we aim to improve the
            platform’s usability, performance, and value to merchants.
          </p>
          <p className="black_text mt-3 reveal">
            Ultimately, we want to create a more effective, user-friendly
            solution that helps Nigerian businesses thrive in the digital
            economy and achieve the growth they deserve.
          </p>
        </div>
        <div className="m-auto mt-10 reveal">
          <Lottie animationData={trans} loop={true} className="w-full h-full" />
        </div>
      </BorderBody>

      <BorderBody className="mt-9">
        <div className="sm:w-[481px] m-auto reveal">
          <p className="text-[#8A8A8A] uppercase">Usability Testing</p>
          <p className="black_text mt-3">
            Through Think-Aloud sessions with 20 participants, we collected
            real-time user feedback on task performance. This included insights
            on task completion time, error rates, and drop-off points.
          </p>
        </div>

        <div className="sm:w-[481px] m-auto mt-14 reveal">
          <p className="text-[#8A8A8A] uppercase">
            KEY INSIGHTS FROM USABILITY TESTING
          </p>

          <ul className="list-decimal ml-4 reveal">
            <li className="black_text mt-3">
              Onboarding was overwhelming - Users were frustrated with lengthy
              KYC processes.
            </li>
            <li className="black_text mt-3">
              Checkout Dissatisfaction - Navigation was unclear, and payment
              methods lacked flexibility.
            </li>
            <li className="black_text mt-3">
              Complex Navigation - Users couldn’t easily locate key features.
            </li>
            <li className="black_text mt-3">
              Poor Usability Scores - an SUS score of 44.4 highlighted the need
              for redesign.
            </li>
          </ul>
        </div>

        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-24 mt-14 reveal">
          <img src="/Checkout.png" alt="" className="object-cover" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <img src="/Onboard.png" className="object-cover" alt="" />
        </div>
      </BorderBody>

      <BorderBody className="">
        <div className="sm:w-[481px] m-auto mt-8 reveal">
          <p className="text-[#8A8A8A] uppercase">
            Collaborative Solution Design
          </p>
          <p className="black_text mt-3">
            we Conducted design workshops to brainstorm solutions.
          </p>

          <div className="black_text mt-3 reveal">
            <p>For onboarding</p>
            <p>
              Checkout Dissatisfaction - Navigation was unclear, and payment
              methods lacked flexibility.
            </p>
          </div>
          <div className="black_text mt-3 reveal">
            <p>For checkout</p>
            <p>
              A/B Tested horizontal tabs and accordion layouts for payment
              options. The accordion design was preferred.
            </p>
          </div>

          <div className="black_text mt-3 reveal">
            <p>For navigation</p>
            <p>
              Used card sorting with 50 participants to reorganise content to
              match user mental models.
            </p>
          </div>
        </div>

        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-24 reveal">
          <Lottie animationData={wire} loop={true} className="w-full h-full" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <Lottie animationData={wire2} loop={true} className="w-full h-full" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <img src="/First step1.png" alt="" />
        </div>
      </BorderBody>

      <BorderBody className="">
        <div className="sm:w-[481px] m-auto mt-9 reveal">
          <p className="text-[#8A8A8A] uppercase">Testing Solutions</p>
          <p className="black_text mt-3">
            A/B testing and usability testing confirmed improvements.
          </p>
          <p className="black_text mt-3">
            Results showed a significant boost in onboarding completion (from
            44.4% to 85%) and reduced drop-off rates (from 60% to 15%).
          </p>
          <p className="black_text mt-3">
            Users preferred the new checkout design for being more intuitive.
          </p>
        </div>

        <div className="m-auto sm:h-[280px] lg:w-[480px] sm:w-[85%] w-full mt-24 reveal">
          <img
            src="/Frame 8 1.png"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </BorderBody>
      <BorderBody className="">
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-20 reveal">
          <Lottie
            animationData={squad2}
            loop={true}
            className="w-full h-full"
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <img src="/First-step.png" alt="" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <Lottie
            animationData={squad2w}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </BorderBody>

      <BorderBody className="mt-8">
        <div className="sm:flex justify-between fade_text reveal">
          <p>RESULTS AND IMPACT</p>
          <div className="sm:w-[510px] black_text exper ">
            <div className="">
              <p className="font-roboto-mono text-lg">30,000+</p>
              <p className="mt-3">
                Surpassed our initial goal of onboarding 5,000 merchants within
                6 months by successfully onboarding 30,000+ business owners.
              </p>
            </div>

            <div className="mt-6 reveal">
              <p className="font-roboto-mono text-lg">$270M</p>
              <p className="mt-3">
                Exceeded our goal of facilitating $120 million in transactions
                in the first 6 months by processing $270 million in monthly
                transactions
              </p>
            </div>

            <div className="mt-14 flex items-center gap-3 font-roboto-mono reveal">
              <Link
                href={
                  "https://jhud.notion.site/Squad-2-0-Navigating-Challenges-Elevating-User-Experiences-d8bcd6ffdfe445128b5c31246da9eb80?pvs=4"
                }
                className="text-[#8A8A8A] text-xs"
                target="_blank"
              >
                <TypingEffect word=" READ FULL CASE STUDY ON NOTION" />
              </Link>
              <HiArrowRight size={16} />
            </div>
          </div>
        </div>
      </BorderBody>
      <Footer className="reveal" />
    </AnimationCon>
  );
}

export default Squad2;
