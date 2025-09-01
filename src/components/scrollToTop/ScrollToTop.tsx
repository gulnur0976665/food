import React, { useState, useEffect } from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import scss from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrolled > 700) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className={`${scss.arrowUpIcons} ${visible ? scss.show : ""}`}
      onClick={scrollToTop}
    >
      <HiArrowLongUp className={scss.icon} />
    </div>
  );
};

export default ScrollToTop;
