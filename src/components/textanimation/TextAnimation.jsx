import React, { useState } from "react"

const TextAnimation = ({ text, fontStyle }) => {
  const [mouse, setMouse] = useState({});

  const getMousePosition = (event) => {
    const gradX = (event.nativeEvent.offsetX / event.target.offsetWidth) * 100;
    const gradY = (event.nativeEvent.offsetY / event.target.offsetHeight) * 100;
    setMouse({ x: gradX, y: gradY });
  }

  return (
    <div className="relative h-40" onMouseMove={getMousePosition}>
      <div className={`font-[${fontStyle}] text-white h-full lg:text-7xl  bg-black text-xl w-screen flex flex-col text-center items-center justify-center absolute z-0 top-0 left-0 `}>
        {text}
      </div>
      <div className="absolute top-0 left-0 z-20 w-screen h-full opacity-[0.93] bg-black"
        style={{ background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 8%, rgb(0,0,0) 100%)` }}
      >
      </div>
    </div>
  );
}

export default TextAnimation;