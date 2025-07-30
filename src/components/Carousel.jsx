import { useState } from "react";
import prod_image_1 from "../../images/image-product-1.jpg";
import prod_image_2 from "../../images/image-product-2.jpg";
import prod_image_3 from "../../images/image-product-3.jpg";
import prod_image_4 from "../../images/image-product-4.jpg";
import leftSlider from "../../images/icon-previous.svg";
import rightSlider from "../../images/icon-next.svg";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const carouselImages = [prod_image_1,prod_image_2,prod_image_3,prod_image_4];
  
  const handlePrevBtn = () => {
    setIndex((prev) => {
        if (prev === 0) return 3;
        return prev - 1;
    });
  };

  const handleNextBtn = () => {
    setIndex((prev) => (prev + 1) % 4);
  };

  return (
    <div className="relative lg:hidden md:m-8 md:rounded-xl overflow-hidden transition-margin duration-300 ease-out">
      <div
        onClick={handlePrevBtn}
        className="flex justify-center absolute left-4 top-1/2 -translate-y-1/2 bg-white w-[40px] h-[40px] rounded-full hover:cursor-pointer"
      >
        <img className="self-center w-[10px] mr-1" src={leftSlider} alt="" />
      </div>
      <div
        onClick={handleNextBtn}
        className="flex justify-center absolute right-4 top-1/2 -translate-y-1/2 bg-white w-[40px] h-[40px] rounded-full hover:cursor-pointer"
      >
        <img className="self-center w-[10px] ml-1" src={rightSlider} alt="" />
      </div>
      <img src={carouselImages[index]} alt="" />
    </div>
  );
}
