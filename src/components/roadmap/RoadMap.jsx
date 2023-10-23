import React, { useState, useEffect } from "react"
import roadMap from "../../assets/title.png"
import { gsap } from 'gsap'

const RoadMap = () => {
  const [timeline, setTimeline] = useState(new gsap.timeline());
  const [progress, setProgress] = useState(0);
  const [prevProg, setPrevProg] = useState(-1);

  useEffect(() => {
    const handleArrowKeyPress = (event) => {
      if (event.keyCode === 39 || event.key === 'ArrowRight') {
        setPrevProg((currPrevProg) => {
          if (progress < 2) return progress;
          return currPrevProg;
        });
        setProgress((currProg) => {
          if (currProg < 2) return currProg + 1;
          return currProg;
        });
      }

      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        setPrevProg((currPrevProg) => {
          if (progress > 0) return progress;
          return currPrevProg;
        });
        setProgress((currProg) => {
          if (currProg > 0) return currProg - 1;
          return currProg;
        });
      }
    };

    document.addEventListener('keydown', handleArrowKeyPress);

    return () => {
      document.removeEventListener('keydown', handleArrowKeyPress);
    };
  }, [timeline, progress]);

  useEffect(() => {
    console.log("Progress = ", progress);
    // Use the updated progress state to trigger animations
    if (progress === 0) {
      timeline.to(".stop-2-bg", { background: "rgba(21,35,41,0.4)", duration: 0.05 });
      timeline.to(".stop-2", { background: "#152329", duration: 0.05 });
      timeline.to(".line-2", { width: "0%", duration: 0.4 });
      timeline.to(".bullet-1", { background: "#152329", duration: 0.05 })
      timeline.to(".line-1", { width: "30%", duration: 0.2 });
    } else if (progress === 1 && prevProg === 0) {
      timeline.to(".line-1", { width: "100%", duration: 0.2 });
      timeline.to(".bullet-1", { background: "#4FA9E2", duration: 0.05 })
      timeline.to(".line-2", { width: "100%", duration: 0.2 });
      timeline.to(".stop-2", { background: "#4FA9E2", duration: 0.05 })
      timeline.to(".stop-2-bg", { background: "rgba(79,170,226,0.2)", duration: 0.05 })
    } else if (progress === 2 && prevProg === 1) {
      timeline.to(".line-3", { width: "100%", duration: 0.2 });
      timeline.to(".bullet-2", { background: "#4FA9E2", duration: 0.05 });
    } else if (progress === 1 && prevProg === 2) {
      timeline.to(".bullet-2", { background: "#152329", duration: 0.05 });
      timeline.to(".line-3", { width: "0%", duration: 0.2 });
    }
  }, [timeline, progress]);

  return (
    <div className="mt-16" style={{ background: `radial-gradient(circle at 300px 750px, rgba(17, 44, 62, 0.7) 0%, #000000 45%)` }}>
      <img className="ml-24" src={roadMap} alt="roadmap-img" />

      <div className="relative overflow-hidden">
        <div className="frame-container flex items-stretch overflow-x-auto h-[80vh]">
          <div className="frame pl-32 w-[400vw] h-full flex flex-col flex-shrink-0 justify-center">
            <div className="flex items-center h-12 ">
              {/* Stop-1 */}
              <div className="rounded-full h-8 w-8 z-20 bg-[#4FA9E2] self-start mt-[-0.75rem] mx-[-1rem] stop-1"></div>
              <div className="rounded-full h-16 w-16 z-10 bg-[rgba(79,170,226,0.2)] self-start mt-[-1.7rem] mx-[-2rem] stop-1-bg"></div>
              {/* Line-1 */}
              <div className="bg-[#152329] rotate-[15deg] w-[2.5%] h-2 rounded-lg">
                <div className="m-0 p-0 w-[30%] bg-[#4FA9E2] h-full rounded-lg line-1"></div>
              </div>
              {/* Bullet-1 */}
              <div className="rounded-full h-4 w-4 z-10 bg-[#152329] self-end mb-[-0.2rem] mx-[-0.5rem] bullet-1"></div>
              {/* Line-2 */}
              <div className="bg-[#152329] rotate-[-2.3deg] w-[15%] h-2 rounded-lg">
                <div className="m-0 p-0 w-0 bg-[#4FA9E2] h-full rounded-lg line-2"></div>
              </div>
              {/* Stop-2 */}
              <div className="rounded-full h-8 w-8 z-20 bg-[#152329] self-start mt-[-0.75rem] mx-[-1rem] stop-2"></div>
              <div className="rounded-full h-16 w-16 z-10 bg-[rgba(21,35,41,0.4)] self-start mt-[-1.7rem] mx-[-2rem] stop-2-bg"></div>
              {/* Line-3 */}
              <div className="bg-[#152329] rotate-[7deg] w-[5%] h-2 rounded-lg">
                <div className="m-0 p-0 w-0 bg-[#4FA9E2] h-full rounded-lg line-3"></div>
              </div>
              {/* Bullet-2 */}
              <div className="rounded-full h-4 w-4 z-10 bg-[#152329] self-end mb-[-0.2rem] mx-[-0.5rem] bullet-2"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoadMap;