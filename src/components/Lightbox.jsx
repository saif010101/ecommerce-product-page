import { useState } from "react";
import closeIcon from "../../images/icon-close-lightbox.svg";
import ImageOne from "../../images/image-product-1.jpg";
import ImageTwo from "../../images/image-product-2.jpg";
import ImageThree from "../../images/image-product-3.jpg";
import ImageFour from "../../images/image-product-4.jpg";
import smallImageOne from "../../images/image-product-1-thumbnail.jpg";
import smallImageTwo from "../../images/image-product-2-thumbnail.jpg";
import smallImageThree from "../../images/image-product-3-thumbnail.jpg";
import smallImageFour from "../../images/image-product-4-thumbnail.jpg";
import leftSlider from "../../images/icon-previous.svg";
import rightSlider from "../../images/icon-next.svg";

export default function Lightbox({ handleCrossClick }) {
  const [smallImgIdx, setSmallImgIdx] = useState(0);
  const mainImages = [ImageOne, ImageTwo, ImageThree, ImageFour];

  const handlePrevBtn = () => {
    setSmallImgIdx((prev) => {
      if (prev === 0) return 3;
      return prev - 1;
    });
  };

  const handleNextBtn = () => {
    setSmallImgIdx((prev) => (prev + 1) % 4);
  };

  return (
    <>
      <div className="fixed top-0 flex flex-col gap-2 justify-center items-center w-full min-h-screen bg-black/70">
        {/* cross icon */}
        <img
          className="w-6 translate-x-[230px] cursor-pointer"
          src={closeIcon}
          alt=""
          onClick={handleCrossClick}
        />
        {/* Main Image */}
        <div className="relative mb-6">
          <img
            className="w-[500px] rounded-xl"
            src={mainImages[smallImgIdx]}
            alt=""
          />
          <div
            onClick={handlePrevBtn}
            className="flex justify-center absolute -left-6 top-1/2 -translate-y-1/2 bg-white w-[50px] h-[50px] rounded-full hover:cursor-pointer"
          >
            <img
              className="self-center w-[10px] mr-1"
              src={leftSlider}
              alt=""
            />
          </div>
          <div
            onClick={handleNextBtn}
            className="flex justify-center absolute -right-6 top-1/2 -translate-y-1/2 bg-white w-[50px] h-[50px] rounded-full hover:cursor-pointer"
          >
            <img
              className="self-center w-[10px] ml-1"
              src={rightSlider}
              alt=""
            />
          </div>
        </div>

        {/* Small Images Row Container*/}
        <div className="flex gap-6 justify-center mb-4">
          {/* Flex item 1*/}
          <div
            data-selected={smallImgIdx == 0 ? "true" : ""}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setSmallImgIdx(0);
            }}
          >
            <img className="w-24" src={smallImageOne} alt="" />
          </div>
          {/* Flex item 2*/}
          <div
            data-selected={smallImgIdx == 1 ? "true" : ""}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setSmallImgIdx(1);
            }}
          >
            <img className="w-24 " src={smallImageTwo} alt="" />
          </div>
          {/* Flex item 3*/}
          <div
            data-selected={smallImgIdx == 2 ? "true" : ""}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setSmallImgIdx(2);
            }}
          >
            <img className="w-24" src={smallImageThree} alt="" />
          </div>
          {/* Flex item 4*/}
          <div
            data-selected={smallImgIdx == 3 ? "true" : ""}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setSmallImgIdx(3);
            }}
          >
            <img className="w-24" src={smallImageFour} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
