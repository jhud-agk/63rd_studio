//
"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function AnimationCon({
  children,
}: // className,
{
  children: ReactNode;
  // className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (!sectionRef.current) return;
    const elements = sectionRef.current!.querySelectorAll(".reveal");
    const first = sectionRef.current!.querySelectorAll(".first");

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          // start: "bottom 40%",
          start: "top 90%",
          // toggleActions: "play none none reverse",
          // start: "top bottom",
          // end: "top center",
          toggleActions: "play none none none",
        },
        // scrub: 1,
      });
    });

    first.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power2.out",
        stagger: {
          amount: 1.5,
        },
        // scrollTrigger: {
        //   trigger: el,
        //   start: "top 100%",
        //   toggleActions: "play none none none",
        // },
        // scrub: 1,
      });
    });
  }, []);
  return (
    <main className="font-roboto-mono" ref={sectionRef}>
      {children}
    </main>
  );
}

export default AnimationCon;
