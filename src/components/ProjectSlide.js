import React from "react";
import Image1 from '../img/ProjectsForPortfolio/ScheduleApp/1.PNG';
import Image2 from '../img/ProjectsForPortfolio/ScheduleApp/2.PNG';
import Image3 from '../img/ProjectsForPortfolio/ScheduleApp/3.PNG';
import Image4 from '../img/ProjectsForPortfolio/ScheduleApp/4.PNG';
import Image5 from '../img/ProjectsForPortfolio/ScheduleApp/5.PNG';
import Image6 from '../img/ProjectsForPortfolio/ScheduleApp/6.PNG';

const images = [Image1, Image2, Image3,Image4, Image5, Image6];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

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
              style={{ width: 400 }}
              resizeMode="contain"
              alt=""/>
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
