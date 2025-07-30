import minusIcon from "../../images/icon-minus.svg";
import plusIcon from "../../images/icon-plus.svg";
import cartIcon from "../../images/icon-cart-black.svg";
import { useState } from "react";

export default function Content({
  handlePlusClick,
  handleMinusClick,
  quantity,
  handleAddToCart,
}) {
  return (
    <div className="flex flex-col gap-3 items-center p-5">
      <span className="mr-auto text-[clamp(0.75rem,3vw,1rem)] tracking-widest uppercase font-bold text-(--color-dark-grayish-blue)">
        Sneaker Company
      </span>
      <h1 className="font-bold text-[clamp(2rem,6vw,2.75rem)] leading-[3rem] mr-auto">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[clamp(1rem,3vw,1.10rem)] text-(--color-dark-grayish-blue)">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      {/* Price Tag */}
      <div className="w-full flex items-center gap-4  mt-2 mb-6 lg:flex-col lg:items-start lg:gap-0">
        <div className="flex gap-3 items-center">
          <span className="font-[700] text-[clamp(1rem,4vw,2rem)]">
            $125.00
          </span>
          <span className="self-center font-bold text-white bg-black rounded-md px-3 py-[.1rem]">
            50%
          </span>
        </div>
        <span className="ml-auto md:ml-0 font-[700] text-[clamp(1rem,3vw,1.25rem)]  text-(--color-dark-grayish-blue)">
          <del>$250.00</del>
        </span>
      </div>
      {/* Quantity Box + Add to cart button */}
      <div className="w-full lg:flex ">
        {/* Quantity Box */}
        <div className="w-full mb-2 lg:w-5/10 flex items-center justify-between rounded-md py-3 px-5 bg-(--color-light-grayish-blue)">
          <img
            className="self-center hover:cursor-pointer"
            src={minusIcon}
            alt=""
            onClick={handleMinusClick}
          />
          <span className="font-bold">{quantity}</span>
          <img
            className="self-center hover:cursor-pointer"
            src={plusIcon}
            alt=""
            onClick={handlePlusClick}
          />
        </div>
        {/* Add to cart button */}
        <button
          type="button"
          className="w-full flex justify-center gap-3 py-4 rounded-lg bg-(--color-orange) font-bold hover:bg-(--color-orange-light) hover:cursor-pointer"
          onClick={handleAddToCart}
        >
          <img className="w-[20px] self-center" src={cartIcon} alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
