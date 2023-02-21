import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={28} />
        </div>

        <h1 className="text-xl sm:text-3xl md:lg:text-4xl px-1">
          Good <span className="font-bold">Food</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input box */}
      <div className="bg-gray-200 rounded-full flex items-center px- sm:w-[400px] lg:w-[600px] cursor-pointer">
        <AiOutlineSearch size={25} />
        <input
          className="w-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>

      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}

      {nav ? (
        <div onClick={() => setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      
      {/* side -draw menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
        
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute  right-4 top-4 cursor-pointer"
        />
        <a href="./Hero.jsx">
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>
        </a>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best Orders
            </li>
            <li className="text-xl py-4 flex hover:scale-105 duration-300 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
