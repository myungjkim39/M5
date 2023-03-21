import { useState } from "react";
import CarouselImage1 from "../images/Carousel-image1.jpg";
import CarouselImage2 from "../images/Carousel-image2.jpg";
import CarouselImage3 from "../images/Carousel-image3.jpg";
import CarouselImage4 from "../images/Carousel-image4.jpg";
import CarouselImage5 from "../images/Carousel-image5.jpg";

export default function Carousel() {
  const [activeItem, setActiveItem] = useState(0);
  const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
    CarouselImage4,
    CarouselImage5,
  ];

  const handleImageClick = () => {
    setActiveItem(activeItem === images.length - 1 ? 0 : activeItem + 1);
  };

  return (
    <div className="relative">
      <div
        className="relative h-46 md:h-96 rounded-lg overflow-hidden"
        onClick={handleImageClick}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeItem ? "block" : "hidden"
            } absolute w-full h-full transition ease-in-out duration-700`}
          >
            <img
              src={image}
              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
