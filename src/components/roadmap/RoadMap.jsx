import React, { useState, useEffect } from "react"
import roadMap from "../../assets/title.png"
import { gsap } from 'gsap'

const RoadMap = () => {
  const [timeline, setTimeline] = useState(new gsap.timeline());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleArrowKeyPress = (event) => {
      if (event.keyCode === 39 || event.key === 'ArrowRight') {
        setProgress((prevProgress) => {
          if (prevProgress < 2) return prevProgress + 1;
          return prevProgress;
        });
      }

      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        setProgress((prevProgress) => {
          if (prevProgress > 0) return prevProgress - 1;
          return prevProgress;
        });
      }
    };

    document.addEventListener('keydown', handleArrowKeyPress);

    return () => {
      document.removeEventListener('keydown', handleArrowKeyPress);
    };
  }, [timeline]);

  useEffect(() => {
    console.log("Progress = ", progress);
    // Use the updated progress state to trigger animations
    if (progress === 0) {
      timeline.to(".line-2", { width: "0%", duration: 0.6 });
      timeline.to(".bullet-1", { background: "#152329", duration: 0.2 })
      timeline.to(".line-1", { width: "30%", duration: 0.4 });
    } else if (progress === 1) {
      timeline.to(".line-1", { width: "100%", duration: 0.4 });
      timeline.to(".bullet-1", { background: "#4FA9E2", duration: 0.2 })
      timeline.to(".bullet-2", { background: "#152329", duration: 0.2 })
      timeline.to(".line-2", { width: "60%", duration: 0.6 });
    } else if (progress === 2) {
      timeline.to(".line-2", { width: "100%", duration: 0.4 });
      timeline.to(".bullet-2", { background: "#4FA9E2", duration: 0.2 })
    }
  }, [timeline, progress]);

  return (
    <div className="mt-16" style={{ background: `radial-gradient(circle at 300px 750px, rgba(17, 44, 62, 0.7) 0%, #000000 45%)` }}>
      <img className="ml-24" src={roadMap} alt="roadmap-img" />

      <div className="relative overflow-hidden">
        <div className="frame-container flex items-stretch overflow-x-auto h-[80vh]">

          {/* Frame-1 */}
          <div className="frame pl-20 w-screen h-full flex flex-col flex-shrink-0 justify-center">
            <div className="flex items-center h-12 ">
              {/* Line-1 */}
              <div className="bg-[#152329] rotate-[15deg] w-[10%] h-2 rounded-lg">
                <div className="m-0 p-0 w-[30%] bg-[#4FA9E2] h-full rounded-lg line-1"></div>
              </div>
              {/* Bullet-1 */}
              <div className="rounded-full h-4 w-4 z-10 bg-[#152329] self-end mb-[-0.2rem] mx-[-0.5rem] bullet-1"></div>
              {/* Line-2 */}
              <div className="bg-[#152329] rotate-[-1.98deg] w-[75%] h-2 rounded-lg">
                <div className="m-0 p-0 w-0 bg-[#4FA9E2] h-full rounded-lg line-2"></div>
              </div>
              {/* Bullet-2 */}
              <div className="rounded-full h-4 w-4 z-10 bg-[#152329] self-start mt-[-0.25rem] mx-[-0.5rem] bullet-2"></div>
            </div>
          </div>

          {/* Frame-2 */}
          <div className="frame w-screen h-full flex flex-col flex-shrink-0 justify-center">
            <div className="flex w-screen items-center h-12 ">
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