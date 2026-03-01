//
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
// import Lenis from "lenis";

// const lenis = new Lenis();
function StartFronTop() {
  const router = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    // lenis.scrollTo(0, { immediate: true });
  }, [router, lenis]);

  return null;
}

export default StartFronTop;
