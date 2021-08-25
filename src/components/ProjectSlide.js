import React from "react";
import { useState } from 'react';

const delay = 2500;

function Slideshow({imagesList}) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [images, setImages] = useState(imagesList);


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((currentImage, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundImage : currentImage }}
          >
              <img 
              src={currentImage} 
              style={{ width: 400}}
              resizeMode="contain"
              alt=""/>
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
