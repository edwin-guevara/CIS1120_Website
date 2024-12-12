import React, { useEffect, useState } from "react";
import "../ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScroll = () => {
    if (window.scrollY > 240) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      Go to Top
    </button>
  );
};

export default ScrollToTop;
