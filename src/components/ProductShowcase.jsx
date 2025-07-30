import { useState } from "react";
import smallImageOne from "../../images/image-product-1-thumbnail.jpg";
import smallImageTwo from "../../images/image-product-2-thumbnail.jpg";
import smallImageThree from "../../images/image-product-3-thumbnail.jpg";
import smallImageFour from "../../images/image-product-4-thumbnail.jpg";
import ImageOne from "../../images/image-product-1.jpg";
import ImageTwo from "../../images/image-product-2.jpg";
import ImageThree from "../../images/image-product-3.jpg";
import ImageFour from "../../images/image-product-4.jpg";

export default function ProductShowcase({ handleImageClick }) {
  // selected small images based on thier index
  const [smallImgIdx, setSmallImgIdx] = useState(0);
  const mainImages = [ImageOne, ImageTwo, ImageThree, ImageFour];
  return (
    <div
      className="flex-col gap-7 items-center hidden lg:flex overflow-hidden"
      
    >
      {/* Main Image */}
      <img
        className="w-[420px] rounded-lg cursor-pointer"
        src={mainImages[smallImgIdx]}
        alt=""
        onClick={handleImageClick}
      />
      {/* Small Images Row Container*/}
      <div className="flex gap-3 justify-center mb-2">
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
  );
}
