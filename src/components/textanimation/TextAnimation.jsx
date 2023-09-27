import React, { useState } from "react"

const TextAnimation = ({ text, fontStyle }) => {
  const [mousePos, setMousePos] = useState({});
  const [mouseOn, setMouseOn] = useState(false);
  const setMouseLeft = (event) => {
    setMouseOn(false);
  }
  const setMouseEnter = (event) => {
    setMouseOn(true);
  }
  const getMousePosition = (event) => {
    const gradX = (event.nativeEvent.offsetX / event.target.offsetWidth) * 100;
    const gradY = (event.nativeEvent.offsetY / event.target.offsetHeight) * 100;
    setMousePos({ x: gradX, y: gradY });
  }

  return (
    <div
      className="relative h-40"
      onMouseMove={getMousePosition}
      onMouseEnter={setMouseEnter}
      onMouseLeave={setMouseLeft}
    >
      <div className={`font-[${fontStyle}] text-white h-full lg:text-7xl bg-[black] text-2xl w-screen flex flex-col text-center items-center justify-center absolute z-0 top-0 left-0 `}>
        {text}
      </div>
      <div className="absolute top-0 left-0 z-20 w-screen h-full hidden lg:block"
        style={mouseOn ? { background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 0%, rgba(0,0,0,0.4) 4%, rgba(0,0,0,0.8) 7%, rgba(0,0,0,0.98) 100%)` } : { background: "rgba(0,0,0,0.88)" }}
      ></div>
      <div className="absolute top-0 left-0 z-20 w-screen h-full block lg:hidden animate-[shiftColors_1.5s_ease-in-out_infinite]"
      ></div>

    </div>
  );
}

export default TextAnimation;