import React, { useState } from "react";
import { Card } from "../_blocks/Card";
import { styles } from "../../utils/style";

const CardSlider = ({ cards, slidesToShow, relationTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cards.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full sm:w-1/${slidesToShow} px-2`}
            >
              <Card relationTo={relationTo} doc={card} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={prevSlide} className={styles.teritaryBtn}>
          Prev
        </button>
        <button onClick={nextSlide} className={styles.teritaryBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
