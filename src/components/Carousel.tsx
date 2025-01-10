import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
  itemWigth: number;
  frameSize: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  itemWigth = 130,
  frameSize = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = images.length - frameSize;

  const buttonNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < maxIndex ? prevIndex : prevIndex,
    );
  };

  const buttonPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="Carousel" style={{ width: `${itemWigth * frameSize}px` }}>
      <div className="Carousel__wrapper">
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${currentIndex * itemWigth}px)`,
          }}
        >
          {images.map((src, index) => (
            <li
              key={index}
              className={index === currentIndex ? 'active' : ''}
              style={{ width: `${itemWigth}px` }}
            >
              <img src={src} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="buttonPrev"
        onClick={buttonPrev}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
      <button
        type="button"
        className="buttonNext"
        onClick={buttonNext}
        disabled={currentIndex >= maxIndex}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
