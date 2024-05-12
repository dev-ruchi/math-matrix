import React from "react";
import hut from "../assets/hut.png";
import { ChevronRight } from "feather-icons-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center px-16 py-12">
        <img src={hut} alt="hut-icon" className="w-6" />
        <ChevronRight />
        <p className="px-4 text-xl text-gray-600">Flashcard</p>
        <ChevronRight />
        <p className="px-4 text-xl text-gray-600">Mathematics</p>
        <ChevronRight />
        <p className="px-4 text-xl text-[#051a91]">Relation and Function</p>
      </div>
      <div>
        <p className="px-20 text-4xl text-[#051a91]">
          Relations and Functions ( Mathematics )
        </p>
      </div>
    </div>
  );
};

export default Header;
