/* eslint-disable @next/next/no-img-element */
//
"use client";
import BorderBody from "@/component/BorderBody";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import bumble1 from "@/lottie-files/Bumble-1.json";
import bumble2 from "@/lottie-files/Bumble-2.json";
import GoTo from "@/component/GoTo";
import Link from "next/link";
import AnimationCon from "@/component/AnimationParent";
import TypingEffect from "@/component/TypingEffect";
// import StartFronTop from "@/component/StartFronTop";

function Bumble() {
  return (
    <AnimationCon>
      {/* <StartFronTop /> */}
      <BorderBody className="h-[337px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text first">
          <p className="uppercase">
            Reimagining Bumble’s Profile Sharing Experience
          </p>
          <div className="sm:w-[480px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              Recommending a friend is a free feature that lets bumble users
              safely
            </p>
            <p>
              and easily share a Bumble profile with someone they know,
              encouraging participation.
            </p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-8 reveal">
          <p>
            Recommending a friend is a free feature that lets bumble users
            safely and easily share a Bumble profile with someone they know,
            encouraging participation.
          </p>
        </div>
        <div className="w-full sm:mt-24 mt-14 first">
          <img
            src="/bumble 1.png"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="sm:flex justify-between fade_text sm:mt-24 mt-14 reveal">
          <p>INTRODUCTION AND DETAILS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-8">
            <p className="">
              From the data analysed, users of Bumble frequently resort to
              manually taking screenshots and sending them to their friends to
              recommend a profile. This poses challenges in terms of finding the
              profile on Bumble and creates a suboptimal user experience.
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
              <p>iOS and Android</p>
            </div>
            {/* <div className="mt-5 reveal">
              <p>Timeline</p>
              <p>Q3 2022 - Q1 2023</p>
            </div> */}
            <GoTo
              website={
                "https://bumble.com/en/the-buzz/bumble-recommend-to-a-friend"
              }
              notion={
                "https://jhud.notion.site/Reimagining-Bumbles-Profile-Sharing-Experience-e42ba09c4dc346989839363557828a03?pvs=4"
              }
              className="reveal"
            />
          </div>
        </div>
      </BorderBody>

      <BorderBody>
        <div className="sm:w-[481px] m-auto mt-9 reveal">
          <p className="text-[#8A8A8A]">BUSINESS GOALS & OBJECTIVES</p>
          <p className="black_text mt-3">
            Introduce a feature that enables in-app profile sharing via
            screenshots. This would make it easier for users to recommend
            profiles to their friends while ensuring recipients can quickly find
            the shared user within the app
          </p>
          <p className="black_text mt-3 reveal">
            This feature encourages users to share profiles, fostering
            connections and increasing activity on Bumble. When users recommend
            profiles to friends, it can attract new users, boosting
            subscriptions and expanding the user base.
          </p>
          <p className="black_text mt-3 reveal">
            The experiment&apos;s main goal is to improve the profile-sharing
            experience, making it easier to recommend profiles and encouraging
            more sharing. This can lead to increased referrals, more new users,
            and higher Average Revenue Per User (ARPU) on both Android and iOS
            platforms.
          </p>

          <div className="sm:h-[500px] h-[300px] relative m-auto sm:w-[481px] mt-14 reveal">
            <video
              src="/Bumble-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </BorderBody>
      <BorderBody className="sm:mt-20 mt-10">
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full reveal">
          <img
            src="/RecommendToAFriend_Final 1.png"
            className="object-cover"
            alt=""
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <Lottie
            animationData={bumble1}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </BorderBody>
      <BorderBody className="mt-8">
        <div className="sm:flex justify-between fade_text reveal">
          <p>DESIGN METHODOLOGY & PROCESS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>Desk Research </p>
              <p>
                I Conducted secondary research analysing apps like ASOS,
                Net-A-Porter, Bookings.com, and AXS to understand feature
                implementation from entry to completion while noting overall
                user experience.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Team Collaboration</p>
              <p>
                We Analysed findings to define user stories, flows, and
                jobs-to-be-done. Brainstormed potential solutions as a team.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Crazy 8 Workshop </p>
              <p>
                We Visualised multiple design ideas to explore diverse
                solutions.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Wireframes</p>
              <p>
                I Created 5 design directions with pros, cons, and
                recommendations. I Conducted an impact assessment and
                prioritisation mapping for all options.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Decision Making</p>
              <p>
                Used dot voting to select the best solution and I developed a
                high-fidelity interactive prototype.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>User Testing</p>
              <p>
                Tested the prototype with 10 participants, identified and
                resolved issues as a team, and redesigned the solution to
                rectify issues.
              </p>
            </div>

            <div className="mt-5 reveal">
              <p>Focus Group</p>
              <p>
                To gain a deeper understanding of the concerns and preferences
                related to gender representation during our testing session, we
                conducted a focus group with 10 participants.
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-24 mt-14 reveal">
          <Lottie
            animationData={bumble2}
            loop={true}
            className="w-full h-full"
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-6 reveal">
          <img src="/image 1.png" alt="" />
        </div>
      </BorderBody>

      <BorderBody className="mt-8">
        <div className="sm:flex justify-between fade_text reveal">
          <p>RESULTS AND IMPACT</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p className="font-roboto-mono text-lg">906,000+ </p>
              <p className="mt-3">
                Profiles shared — Sparked meaningful interactions and fostered
                new relationships.
              </p>
            </div>

            <div className="mt-6 reveal">
              <p className="font-roboto-mono text-lg">227,000</p>
              <p className="mt-3">
                New accounts were created — Highlighted the effectiveness of
                shared connections in driving platform growth.
              </p>
            </div>

            <div className="mt-6 reveal">
              <p className="font-roboto-mono text-lg">4%</p>
              <p className="mt-3">
                Increase in ARPU — Demonstrated how premium features and in-app
                purchases contribute to a richer user experience and boosted
                revenue.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-3 reveal">
              <Link
                href={
                  "https://jhud.notion.site/Reimagining-Bumbles-Profile-Sharing-Experience-e42ba09c4dc346989839363557828a03?pvs=4"
                }
                className="text-[#8A8A8A] text-xs font-roboto-mono"
              >
                <TypingEffect word="READ FULL CASE STUDY ON NOTION" />
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

export default Bumble;
