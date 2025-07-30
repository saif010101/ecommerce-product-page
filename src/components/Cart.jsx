import CartItem from "./CartItem";

export default function Cart({isCartEmpty,handleCartItemDelete,quantity}) {
  return (
    <div className="absolute top-18 right-[2%] xl:right-[5%] w-[350px]  bg-white rounded-lg z-3 shadow-2xl">
      {/* Header */}
      <div className="border-(--color-grayish-blue) border-b-1 p-6">
        <span className="font-bold">Cart</span>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center items-center min-h-[12rem]">
        {console.log(isCartEmpty)}
        {isCartEmpty ? (
          <span className="font-bold text-(--color-dark-grayish-blue)">
            Your cart is empty.
          </span>
        ) : (
          <>
            <CartItem handleCartItemDelete={handleCartItemDelete} quantity={quantity}/>
            <button className="w-9/10 bg-(--color-orange) font-bold py-4 m-3 mb-8 rounded-lg hover:cursor-pointer">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
