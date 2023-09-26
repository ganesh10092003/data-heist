import React, { useState } from "react"
import logo from "../../assets/title.png"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
  const navbarItems = [
    {
      title: "About Us",
      redirecting: "/"
    },
    {
      title: "Services",
      redirecting: "/"
    },
    {
      title: "Use Cases",
      redirecting: "/"
    },
    {
      title: "Sponcers",
      redirecting: "/"
    },
    {
      title: "Blog",
      redirecting: "/"
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex px-8 items-center justify-between">
      <div className="logo flex justify-center items-center">
        <a href="/">
          <img src={logo} alt="logo" className="w-16 h-20" />
        </a>
        <h1 className="font-[MedievalSharp] text-3xl text-white">
          DataHeist
        </h1>
      </div>

      <div className="flex justify-center items-center lg:hidden z-40 absolute right-10 top-8">
        <button className="text-white" onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul className={`${!isOpen && "hidden"} lg:hidden flex flex-col justify-center w-40 items-center top-0 z-30 bg-[rgba(3,3,5,0.7)] right-6 gap-2 absolute h-screen text-white text-xl`}>
        {navbarItems.map((value, index) => {
          return (
            <li className={"hover:scale-110"} key={index}>
              <a href={value.redirecting}>{value.title}</a>
            </li>
          )
        })}
      </ul>

      <ul className="lg:flex lg:flex-row hidden text-white text-xl justify-center items-center space-x-10">
        {navbarItems.map((value, index) => {
          return (
            <li className="hover:scale-110" key={index}>
              <a href={value.redirecting}>{value.title}</a>
            </li>
          )
        })}
      </ul>
    </div >
  );
}

export default NavBar;