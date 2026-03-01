/* eslint-disable @next/next/no-img-element */
//
"use client";
import dynamic from "next/dynamic";
import BorderBody from "@/component/BorderBody";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import nhs from "@/lottie-files/NHS Showreel.json";
import newNhs from "@/lottie-files/New nhs.json";
import nhs2 from "@/lottie-files/NHS - 2.json";
import GoTo from "@/component/GoTo";
import Link from "next/link";
import AnimationCon from "@/component/AnimationParent";
import TypingEffect from "@/component/TypingEffect";

function NHS1() {
  return (
    <AnimationCon>
      <BorderBody className="h-[337px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text first">
          <p className="uppercase">UX Research Case Study on the NHS App</p>
          <div className="sm:w-[480px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              The NHS app is a healthcare app that provide patients with
              information
            </p>
            <p>about their health and treatment options.</p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-5 reveal">
          <p>
            Recommending a friend is a free feature that lets bumble users
            safely and easily share a Bumble profile with someone they know,
            encouraging participation.
          </p>
        </div>
        <div className="w-full sm:mt-24 mt-14 first">
          <img src="/mock 1.png" alt="" />
        </div>
        <div className="sm:flex justify-between fade_text sm:mt-24 mt-14 reveal">
          <p>INTRODUCTION AND DETAILS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <p className="">
              The experience for many users was far from what they had hoped
              for. Despite the app&apos;s promise of easier access to
              healthcare, a lot of people found it challenging to use or did not
              use it at all.
            </p>
            <div className="mt-5 reveal">
              <p>Role</p>
              <p>Product designer, Researcher</p>
            </div>
            <div className="mt-5 reveal">
              <p>Methodologies</p>
              <p>
                Qualitative and Quantitative research methods, Ethnographic
                research, Think-aloud, Prototyping, RITE Testing, SUS
                questionnaire.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Platform</p>
              <p>Mobile Application</p>
            </div>
            {/* <div className="mt-5 reveal">
              <p>Timeline</p>
              <p>Q1 2023 - Q1 2023</p>
            </div> */}
            <GoTo
              website={
                "https://digital.nhs.uk/blog/design-matters/2024/behind-the-scenes-publishing-the-new-nhs-website-homepage"
              }
              notion={
                "https://jhud.notion.site/A-UX-Research-Case-Study-on-the-NHS-App-94b640a96be94ccb90939544c103b90b?pvs=4"
              }
              className="reveal"
            />
          </div>
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:w-[481px] m-auto mt-8 reveal">
          <p className="text-[#8A8A8A] uppercase">
            what where our research goals
          </p>
          <p className="black_text mt-3">
            The experience for many users was far from what they had hoped for.
            Despite the app&apos;s promise of easier access to healthcare, a lot
            of people found it challenging to use or did not use it at all.
            Because of these difficulties, many people still choose to stick
            with the old, non-technology ways of accessing the NHS. They went
            back to the old-fashioned methods, which kind of defeated the
            purpose of having the app in the first place.
          </p>
          <p className="black_text mt-3 reveal">
            The goal of this research is to seek insight into the reasons behind
            the app&apos;s low adoption rate, identify areas for improvement,
            create solutions, test them, and make recommendations on how to
            enhance its adoption based on our findings
          </p>
          <div className="h-[541px] m-auto sm:w-[324px] sm:mt-24 mt-14 reveal">
            <img
              src="/NHS-App-COVID-pass 1.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </BorderBody>
      <BorderBody>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-20 mt-10 reveal">
          <img src="/SOL_3 1.png" alt="" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-14 mt-6 reveal">
          <img src="/SOL_1 1.png" alt="" />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-[70px] mt-7 reveal">
          <Lottie animationData={nhs} loop={true} className="w-full h-full" />
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:flex justify-between fade_text reveal">
          <p>DESIGN METHODOLOGY & PROCESS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>In-Depth Interviews and Focus Groups </p>
              <p>
                I initially conducted a host of in-depth interviews with current
                users of the app. Purposive sampling was used to recruit
                participants for in-depth Interviews.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Ethnographic Research</p>
              <p>
                I observed users navigating the app in their everyday settings
                —at home, how they booked GP visits, or order prescriptions.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Wireframes</p>
              <p>
                I created wireframes which were direct result of the data
                collection and were essential for the usability testing session.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Usability Testing</p>
              <p>
                For test solutions, I conducted usability tests using the think
                aloud method to observe how usable the app was and see if
                solution met their expectations
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>System Usability Questionnaire (SUS)</p>
              <p>
                I used the SUS questionnaire to measure the perceived usability
                of the solution we designed
              </p>
            </div>

            <div className="sm:mt-14 mt-8 flex items-center gap-2 reveal">
              <Link
                href={
                  "https://jhud.notion.site/A-UX-Research-Case-Study-on-the-NHS-App-94b640a96be94ccb90939544c103b90b?pvs=4"
                }
                className="text-[#8A8A8A] text-xs font-roboto-mono"
              >
                <TypingEffect word="READ FULL CASE STUDY ON NOTION" />
              </Link>
              <HiMiniArrowUpRight color="#18181B" size={16} />
            </div>
          </div>
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full sm:mt-24 mt-14 reveal">
          <Lottie
            animationData={newNhs}
            loop={true}
            className="w-full h-full"
          />
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-7 reveal">
          <Lottie animationData={nhs2} loop={true} className="w-full h-full" />
        </div>
      </BorderBody>
      <BorderBody className="mt-8">
        <div className="sm:flex justify-between fade_text reveal">
          <p className="uppercase">Recommendations for the NHS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>Adopt User-Centered Design (UCD)</p>
              <p>
                Implement UCD principles to ensure the app aligns with user
                needs, improving usability and overall experience.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Plan Research Strategically</p>
              <p>
                Use targeted research methods (e.g., interviews, usability
                testing) to understand user contexts, pain points, and goals,
                optimizing resource use.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Enhance Features for Accessibility</p>
              <p>
                Add features like an information hub, direct messaging, video
                consultations, and geolocation for GP registration to improve
                patient access and streamline healthcare delivery.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Conduct Usability Evaluations</p>
              <p>
                Regularly evaluate the app’s usability through user observation
                to ensure features meet user needs, beyond just adhering to
                design standards.
              </p>
            </div>
          </div>
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:flex justify-between fade_text mt-8 reveal">
          <p className="uppercase">
            Recommendations & Potential Impact From Findings
          </p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>Enhanced Usability and Adoption</p>
              <p>
                The findings highlighted critical usability issues and gaps
                between user needs and app features. By addressing these gaps in
                the redesigned app, users experienced a more efficient and
                satisfying experience.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Bridging the Gap in mHealth</p>
              <p>
                This research addresses a common issue in mHealth apps—low
                adoption due to poor usability. By identifying and solving these
                issues, the NHS app can serve as a model for other mHealth
                applications, driving higher adoption and better healthcare
                delivery.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>
                This can directly reduce the number of road traffic accidents,
                preventing injuries and saving lives.
              </p>
            </div>
            <div className="mt-5 reveal">
              <p>Environmental Sustainability</p>
              <p>
                By minimising patient travel distances and time, the app
                contributes to lower carbon dioxide emissions, aligning with
                sustainability goals and reducing the NHS&apos;s environmental
                footprint.
              </p>
            </div>

            <div className="sm:mt-14 mt-8 flex items-center gap-3 font-roboto-mono reveal">
              <Link
                href={
                  "https://jhud.notion.site/A-UX-Research-Case-Study-on-the-NHS-App-94b640a96be94ccb90939544c103b90b?pvs=4"
                }
                className="text-[#8A8A8A] text-xs font-roboto-mono"
                target="_blank"
              >
                <TypingEffect word="READ FULL CASE STUDY ON NOTION" />
              </Link>
              <HiMiniArrowUpRight color="#18181B" size={16} />
            </div>
          </div>
        </div>
      </BorderBody>
      <Footer className="reveal" />
    </AnimationCon>
  );
}

export default NHS1;
