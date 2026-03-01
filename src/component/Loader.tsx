/* eslint-disable react-hooks/exhaustive-deps */
//
"use client";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypingEffect from "./TypingEffect";

function Loader() {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [counter, setCounter] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  function updateCounter() {
    if (counter >= 100) return;

    if (paused) {
      const resumeDelay = Math.floor(Math.random() * 2000) + 1000;
      timeoutRef.current = setTimeout(() => {
        setPaused(false);
        updateCounter();
      }, resumeDelay);
      return;
    }

    const increment =
      Math.random() > 0.6
        ? Math.floor(Math.random() * 3) + 1
        : Math.floor(Math.random() * 8) + 2;
    setCounter((prev) => Math.min(prev + increment, 100));

    let delay =
      Math.random() > 0.7
        ? Math.floor(Math.random() * 300) + 100
        : Math.floor(Math.random() * 150) + 50;

    if (Math.random() > 0.8 && counter > 30 && counter < 90) {
      setPaused(true);
      delay += Math.floor(Math.random() * 3000) + 1000;
    }

    timeoutRef.current = setTimeout(updateCounter, delay);
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(updateCounter, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useGSAP(() => {
    if (counter >= 60) {
      gsap.to(boxesRef.current, {
        height: 0,
        duration: 1,
        delay: 1,
        stagger: {
          amount: 0.1,
        },
        ease: "power4.inOut",
      });
    }

    gsap.to("#counter", {
      delay: 3,
      opacity: 0,
      display: "none",
    });
    gsap.to("#count", {
      delay: 3,
      opacity: 0,
      display: "none",
    });
  }, [counter]);
  return (
    <main className="fixed top-0 left-0 w-screen flex h-screen">
      <div
        id="counter"
        className="absolute font-roboto-mono text-white top-[20px] left-[55px]"
      >
        <TypingEffect speedd={50} word="JUDE EJIKE USER EXPERIENCE DESIGNER" />
        <TypingEffect speedd={50} word="PORTFOLIO_20/25" />
      </div>
      <p
        id="count"
        className="absolute font-roboto-mono text-white phone:text-[160px] text-[60px] bottom-[30px] left-[55px] tracking-wide"
      >
        {counter}%
      </p>
      {[...Array(6)].map((_, i) => (
        <div
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
          key={i}
          className="show h-screen w-1/6 bg-[#0A0A0A]"
        ></div>
      ))}
    </main>
  );
}

export default Loader;
