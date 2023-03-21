import { useState, useEffect } from "react";
import Carousel from ".././components/Carousel.jsx";

export default function Specs(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/image")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, []);

  return (
    <div className="flex-column">
      <div className="flex-row ml-28 mt-12 text-m">
        Home / Computers & Tablets / laptops / Business Laptops / HP Probook 450
        G9 Business Laptop 15.6"
      </div>

      <div className="flex mt-28">
        <div className="flex-column ml-24 w-[7vw]">
          {images.map((image, index) => (
            <img src={image.image} className="p-3" key={index} />
          ))}
        </div>

        <div className="relative mt-24 md:w-2/5 ml-36">
          <Carousel />
        </div>
        <div className="flex-column">
          <div className="mt-8 ml-28 font-Inter font-semibold text-4xl">
            <div>HP Probook 450 G9</div>
            <div>Business Laptop 15.6"</div>
          </div>
          <div className="ml-28 mt-20 font-Inter font-regular text-5xl">
            $1,782
          </div>
          <button className="bg-secondary text-white p-2 pl-20 pr-20 gap-10 ml-28 mt-16 text-4xl w-[360px]">
            Add to Cart
          </button>
          <div className="flex items-center">
            <button className="bg-primary text-white p-2 pl-10 pr-20 gap-10 ml-28 mt-10 text-2xl hover flex items-center w-[360px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#F08222] fill-[#F08222]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>Add To Wish List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
