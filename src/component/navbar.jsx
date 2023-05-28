import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white h-20 flex justify-between px-4 max-w-[1240px] items-center mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">FinanceOP.</h1>
      <ul className=" hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleClick} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0  w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-center text-3xl m-4 font-bold text-[#00df9a]">
          FinanceOP
        </h1>
        <ul className="uppercase mt-17 p-2">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
