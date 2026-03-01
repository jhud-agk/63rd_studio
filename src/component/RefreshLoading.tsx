//
"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Loader from "./Loader";

function RefreshLoading({ children }: { children: ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const isPageRefreshed = true;

    if (isPageRefreshed) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("visited", "true");
      }, 5400); // Loader duration (adjust as needed)
    }
  }, []);
  return <main>{showLoader ? <Loader /> : children}</main>;
}

export default RefreshLoading;
