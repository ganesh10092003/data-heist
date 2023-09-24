import React from "react"
import logo from "../../assets/logo.png"
import heroLogo from "../../assets/heroLogo.png"
import TextAnimation from "../textanimation/TextAnimation"

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="lg:w-auto w-[150%]" src={heroLogo} alt="head" />
        <img className="lg:w-[40%] w-2/3" src={logo} alt="logo" />

      </div>
      <TextAnimation text="DATAHEIST - UNLOCK THE MAGIC OF DATA" fontStyle="MedievalSharp" />
    </>
  );

}
export default Hero;