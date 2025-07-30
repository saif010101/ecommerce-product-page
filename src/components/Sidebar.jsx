import closeMenuIcon from "../../images/icon-close.svg";

export default function Sidebar({isActive,handleCrossBtnClick}) {
  return (
    <div
      className="absolute left-0 top-0  w-0 h-screen bg-white overflow-hidden transition-width duration-300 ease-in-out"
      data-sidebar={isActive ? "active" : ""}
    >
      <img onClick={handleCrossBtnClick} className="hover:cursor-pointer" src={closeMenuIcon} alt="" />
      <ul className="flex flex-col gap-4 font-bold mt-12">
        <li className="hover:cursor-pointer transition-padding duration-300 ease-out hover:pl-2">Collections</li>
        <li className="hover:cursor-pointer transition-padding duration-300 ease-out hover:pl-2">Men</li>
        <li className="hover:cursor-pointer transition-padding duration-300 ease-out hover:pl-2">Women</li>
        <li className="hover:cursor-pointer transition-padding duration-300 ease-out hover:pl-2">About</li>
        <li className="hover:cursor-pointer transition-padding duration-300 ease-out hover:pl-2">Contact</li>
      </ul>
    </div>
  );
}
