import React from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiplayCircle,
  HiMenu,
  HiTv} from "react-icons/hi2";
  import {Hiplus,HiDotsVertical} from "react-icons/hi";


export default function Header() {
  const menu = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <div>
      <img src={logo} className="logo-image  w-[80px] md:w-[115px] object-cover rounded-full shadow-lg"  />
    </div>
  );
}
