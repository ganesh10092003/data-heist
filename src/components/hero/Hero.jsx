import React from "react"
import logo from "../../assets/logo.png"
import heroLogo from "../../assets/heroLogo.png"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={heroLogo} alt="head" />
      <img className="w-1/3" src={logo} alt="logo" />
    </div>
  );

}
export default Hero;