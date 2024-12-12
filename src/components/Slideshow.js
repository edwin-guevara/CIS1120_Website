import eminem from "../assets/eminem.jpg";
import eminem2 from "../assets/eminem2.jpg";
import eminem3 from "../assets/eminem3.jpg";
import React, { useState, useEffect } from "react";
import "../Slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    { id: 1, src: eminem, alt: "Eminem Image 1" },
    { id: 2, src: eminem2, alt: "Eminem Image 2" },
    { id: 3, src: eminem3, alt: "Eminem Image 3" },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`mySlides ${index === slideIndex ? "active" : ""}`}
          style={{ display: index === slideIndex ? "block" : "none" }}
        >
          <div className="image-wrapper">
            <img src={slide.src} alt={slide.alt} />
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
