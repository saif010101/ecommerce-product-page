import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import ProductShowcase from "./components/ProductShowcase";
import Lightbox from "./components/Lightbox";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const handlePlusClick = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinusClick = () => {
    setQuantity((prev) => (prev === 0 ? prev : prev - 1));
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const handleAddToCart = () => {
    setIsCartEmpty(false);
  };
  const handleCartItemDelete = () => {
    setIsCartEmpty(true);
  };
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <Navbar
        handleCartClick={toggleCart}
        isCartEmpty={isCartEmpty}
        cartSize={quantity}
        handleMenuBtnClick={toggleSidebar}
      />

      <Carousel />
      <main className="grid lg:grid-cols-2 gap-20 lg:my-20 max-w-[1000px]">
        <ProductShowcase handleImageClick={() => {setShowModal(true)}}/>
        <Content
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
          handleAddToCart={handleAddToCart}
          quantity={quantity}
        />
      </main>

      <Sidebar isActive={showSidebar} handleCrossBtnClick={toggleSidebar} />
      {showCart && 
        <Cart
          handleCartItemDelete={handleCartItemDelete}
          isCartEmpty={isCartEmpty}
          quantity={quantity}
        />
      }
      {showModal && <Lightbox handleCrossClick={() => {setShowModal(false)}}/>}
    </>
  );
}

export default App;
