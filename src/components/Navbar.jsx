import menuIcon from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import userAvatar from "../../images/image-avatar.png";
import Cart from "./Cart.jsx";

export default function Navbar({
  handleCartClick,
  cartSize,
  isCartEmpty,
  handleMenuBtnClick,
}) {
  return (
    <>
      <nav className="justify-self-start w-full flex items-center gap-10 py-5 px-6 lg:max-w-[1000px] lg:pb-0 lg:border-b-(--color-grayish-blue) lg:border-b-1">
        <img
          onClick={handleMenuBtnClick}
          className="self-center mt-1 hover:cursor-pointer lg:hidden"
          src={menuIcon}
          alt=""
        />
        <img className="self-start mt-2" src={logo} alt="" />
        {/* Navbar Horizontal List for Desktop Design */}
        <ul className="hidden gap-8 text-(--color-dark-grayish-blue) lg:flex">
            <li className="hover:cursor-pointer hover:border-(--color-orange) hover:border-b-4 mt-2 h-[70px]">Collections</li>
            <li className="hover:cursor-pointer hover:border-(--color-orange) hover:border-b-4 mt-2 h-[70px]">Men</li>
            <li className="hover:cursor-pointer hover:border-(--color-orange) hover:border-b-4 mt-2 h-[70px]">Women</li>
            <li className="hover:cursor-pointer hover:border-(--color-orange) hover:border-b-4 mt-2 h-[70px]">About</li>
            <li className="hover:cursor-pointer hover:border-(--color-orange) hover:border-b-4 mt-2 h-[70px]">Contact</li>
        </ul>
        <div
          onClick={handleCartClick}
          className="relative self-start ml-auto hover:cursor-pointer"
        >
          <img className=" mt-2" src={cartIcon} alt="" />
          {!isCartEmpty && (
            <span className="absolute -top-0 right-0 text-xs text-white bg-(--color-orange) px-[0.2rem] rounded-[4rem]">
              {cartSize}
            </span>
          )}
        </div>
        <img className="self-start w-[25px] lg:w-[40px] " src={userAvatar} alt="" />
      </nav>
    </>
  );
}
