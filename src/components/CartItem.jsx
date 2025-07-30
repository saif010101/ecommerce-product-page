import cartImage from "../../images/image-product-1-thumbnail.jpg";
import trashIcon from "../../images/icon-delete.svg";

export default function CartItem ({handleCartItemDelete,quantity}) {
    return (
        <div className="flex justify-center gap-4 items-center m-4 mt-6">
        <img className="self-center w-12 rounded-md" src={cartImage} alt="" />
        <div className="flex flex-col">
          <span className="text-(--color-dark-grayish-blue)">
            Fall Limited Edition Sneakers
          </span>
          <span className="text-(--color-dark-grayish-blue)">
            $125.00 x {quantity} <span className="font-bold text-black">${quantity * 125}.00</span>
          </span>
        </div>
        <img
          className="self-center hover:cursor-pointer"
          src={trashIcon}
          alt=""
          onClick={handleCartItemDelete}
        />
      </div>
    );
}