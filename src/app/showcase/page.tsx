/* eslint-disable @next/next/no-img-element */
//

import AnimationCon from "@/component/AnimationParent";
import BorderBody from "@/component/BorderBody";
import Header from "@/component/Header";
import React from "react";

function ShowCase() {
  return (
    <AnimationCon>
      <BorderBody className="h-[246px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text first">
          <p className="uppercase">SHOWCASE</p>
          <div className="sm:w-[460px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              This is a collection of concepts, side projects, unused
              experiments,
            </p>
            <p>
              collabs, deigns from other projects ... to sum it up, the ones
              that got away.
            </p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-8 reveal">
          <p>
            This is a collection of concepts, side projects, unused experiments,
            collabs, deigns from other projects ... to sum it up, the ones that
            got away.
          </p>
        </div>

        <section className="mt-[200px] flex flex-col md:flex-row justify-between gap-6">
          <div className="md:w-[60%]">
            <div className="reveal">
              <img
                src="/showcase/effortless.png"
                alt=""
                className="object-cover h-full w-full min-w-[300px]"
              />
              <p className="mt-2">[001]</p>
            </div>
            <div className="mt-5 reveal">
              <img
                src="/showcase/workplace 1.png"
                className="object-cover h-full w-full min-w-[300px]"
                alt=""
              />
              <p className="mt-2">[003]</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-[40%]">
            <div className="reveal">
              <img
                src="/showcase/JNJ 1.png"
                alt=""
                className="object-cover h-full w-full min-w-[300px]"
              />
              <p className="mt-2">[002]</p>
            </div>
            <div className="mt-5 reveal">
              <img
                src="/showcase/Frame 69.png"
                className="object-cover h-full w-full min-w-[300px]"
                alt=""
              />
              <p className="mt-2">[004]</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-5 justify-between">
          <div className="reveal">
            <img
              src="/showcase/Frame 71.png"
              alt=""
              className="object-cover h-full w-full min-w-[300px]"
            />
            <p className="mt-2">[005]</p>
          </div>
          <div className="reveal">
            <img
              src="/showcase/Frame 70.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[006]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9 justify-between">
          <div className="reveal">
            <img
              src="/showcase/Frame 72.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[007]</p>
          </div>
          <div className="reveal">
            <img
              src="/showcase/Frame 73.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[008]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9 justify-between">
          <div className="reveal">
            <img
              src="/showcase/Frame 75.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[009]</p>
          </div>
          <div className="reveal">
            <img
              src="/showcase/Frame 74.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[010]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9 justify-between">
          <div className="md:w-1/2 reveal">
            <img
              src="/showcase/Frame 76.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[011]</p>
          </div>
          <div className="md:w-1/2 reveal">
            <img
              src="/showcase/Frame 77.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[012]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9 mb-20 justify-between">
          <div className="reveal">
            <img
              src="/showcase/Frame 78.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[013]</p>
          </div>
          <div className="reveal">
            <img
              src="/showcase/Frame 79.png"
              className="object-cover h-full w-full min-w-[300px]"
              alt=""
            />
            <p className="mt-2">[014]</p>
          </div>
        </section>
      </BorderBody>
    </AnimationCon>
  );
}

export default ShowCase;
