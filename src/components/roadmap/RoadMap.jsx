import React, { useState, useEffect } from "react"
import roadMap from "../../assets/title.png"

const RoadMap = () => {
  const [progress, setProgress] = useState(0); // Progress from 0 to 100

  useEffect(() => {
    const handleArrowKeyPress = (event) => {
      if (event.keyCode === 39 || event.key === 'ArrowRight') {
        // The right arrow key was pressed
        setProgress((progress) => {
          return (progress + 10);
        })
        console.log("Progress = ", progress);
      }
      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        // The left arrow key was pressed
        setProgress((progress) => {
          return (progress - 10);
        })
        console.log("Progress = ", progress);
      }
    };
    document.addEventListener('keydown', handleArrowKeyPress);
    return () => {
      document.removeEventListener('keydown', handleArrowKeyPress);
    };
  }, []);

  const calculateColor = (lineIndex) => {
    if (lineIndex === 1) {
      if (progress === 0) {
        return `linear-gradient(#4FA9E2 0%, #4FA9E2 30%)`;
      }
      else if (progress >= 10) {
        return '#4FA9E2';
      }
    }
    else if (lineIndex === 2) {
      if (progress === 10) {
        return `linear-gradient(#4FA9E2 0%, #4FA9E2 60%)`;
      }
      else if (progress >= 20) {
        return `#4FA9E2`;
      }
    }
    else if (lineIndex === 3) {
      if (progress >= 60) {
        // Calculate the width of the red color for the third line
        const lineWidth = Math.min(100, progress - 60);
        return `linear-gradient(to right, #4FA9E2 ${lineWidth}%, #152329 ${lineWidth}%)`;
      }
    }
    return '#152329'; // Default color
  };


  // const calculateColor = (lineIndex) => {
  //   if (lineIndex * 10 <= progress) {
  //     return '#4FA9E2';
  //   }
  //   return '#152329'; 
  // };

  return (
    <div className="mt-16" style={{ background: `radial-gradient(circle at 300px 750px, rgba(17, 44, 62, 0.7) 0%, #000000 45%)` }}>
      <img className="ml-24" src={roadMap} alt="roadmap-img" />

      <div className="relative overflow-hidden">
        <div className="frame-container flex items-stretch overflow-x-auto h-[80vh]">

          {/* Frame-1 */}
          <div className="frame w-screen h-full flex flex-col flex-shrink-0 justify-center">
            <div className="flex w-screen pl-20 items-center h-12 ">
              {/* Line-1 */}
              <div className="bg-[#152329] rotate-[15deg] w-[10%] h-2 rounded-lg">
                <div
                  className="m-0 p-0 w-[100%] h-full rounded-lg animate-[slideRight_5s_linear_infinite]"
                  style={{ backgroundColor: calculateColor(1) }}
                ></div>
              </div>

              <div className="rounded-full h-4 w-4 bg-[#152329] self-end mb-[-0.2rem] mx-[-0.5rem]"></div>

              {/* Line-2 */}
              <div className="bg-[#152329] rotate-[-1.98deg] w-[75%] h-2 rounded-lg">
                <div
                  className="m-0 p-0 w-[100%] h-full rounded-lg animate-[slideRight_2s_linear_infinite]"
                  style={{ backgroundColor: calculateColor(2) }}
                ></div>
              </div>

              <div className="rounded-full h-4 w-4 bg-[#152329] self-start mt-[-0.25rem] mx-[-0.5rem]"></div>
            </div>
          </div>

          {/* Frame-2 */}
          <div className="frame w-screen h-full flex flex-col flex-shrink-0 justify-center">
            <div className="flex w-screen pl-20 items-center h-12 ">
              {/* Content for Frame 2 */}
              <div className="bg-[#152329] rotate-[15deg] w-[10%] h-2 rounded-lg"></div>
              <div className="rounded-full h-4 w-4 bg-[#152329] self-end mb-[-0.2rem] mx-[-0.5rem]"></div>
              <div className="bg-[#152329] rotate-[-1.98deg] w-[75%] h-2"></div>
              <div className="rounded-full h-4 w-4 bg-[#152329] self-start mt-[-0.25rem] mx-[-0.5rem]"></div>
            </div>
          </div>

          {/* Frame-3 */}
          <div className="frame w-screen h-full flex-shrink-0 p-4">
            <div className="bg-gray-200 h-full overflow-y-auto p-4">
              {/* Content for Frame 3 */}
            </div>
          </div>

          {/* Frame-4 */}
          <div className="frame w-screen h-full flex-shrink-0 p-4">
            <div className="bg-gray-200 h-full overflow-y-auto p-4">
              {/* Content for Frame 4 */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default RoadMap;