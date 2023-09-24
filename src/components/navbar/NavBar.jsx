import React, { useState } from "react"
import logo from "../../assets/title.png"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navbarItems = [
    {
      title: "About Us",
      redirecting: "about"
    },
    {
      title: "Services",
      redirecting: "services"
    },
    {
      title: "Use Cases",
      redirecting: "use-cases"
    },
    {
      title: "Sponcers",
      redirecting: "sponcers"
    },
    {
      title: "Blog",
      redirecting: "blog"
    }
  ];

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

      <div className="flex justify-center items-center lg:hidden z-10 absolute right-10 top-5">
        <button className="text-white" onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul className="lg:hidden flex flex-col justify-center items-center top-0 right-0 absolute h-screen text-white">
        {navbarItems.map((value, index) => {
          return (
            <li className={`${!isOpen && "hidden"} hover:scale-110`} key={index}>
              <a href={value.redirecting}>{value.title}</a>
            </li>
          )
        })}
      </ul>

      <ul className="lg:flex lg:flex-row hidden text-white text-lg justify-center items-center space-x-10">
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