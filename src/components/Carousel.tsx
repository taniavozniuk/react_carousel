import React, { useState } from 'react';
import './Carousel.scss';

const Carousel: React.FC = () => (
  const [currentIndex, setCurrentIndex] = useState(0) // індекс активного зображення

  const images = [
    'src/img/1.png',
    'src/img/2.png',
    'src/img/3.png',
    'src/img/4.png',
    'src/img/5.png',
    'src/img/6.png',
    'src/img/7.png',
    'src/img/8.png',
    'src/img/9.png',
    'src/img/10.png',
  ];

  return (
  <div className="Carousel">
  <ul className="Carousel__list">
        {images.map((src, index) => {
          <li key={index}>
        <img src='src' alt={`Image ${index + 1}`} />
      </li>
    })}
  </ul>

  <button type="button">Prev</button>
  <button type="button">Next</button>
</div>
    )
);

export default Carousel;
