import React, { useState } from "react"
import logo from "../../assets/logo.png"
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
        <img src={logo} alt="logo" className="w-20 h-20" />
        <h1 className="font-[MedievalSharp] text-2xl text-white">
          DataHeist
        </h1>
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <button className="text-white" onClick={toggleNavbar}>
          Toggle
        </button>
      </div>
      <ul className={`lg:flex lg:flex-row ${isOpen ? "flex-col" : "hidden"} text-white text-lg justify-center items-center space-x-10`}>
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