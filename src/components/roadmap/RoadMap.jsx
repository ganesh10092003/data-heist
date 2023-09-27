import React from "react"
import roadMap from "../../assets/title.png"

const RoadMap = () => {
  return (
    <div className="mt-16" style={{ background: `radial-gradient(circle at 300px 750px, rgba(17, 44, 62, 0.7) 0%, #000000 45%)` }}>
      <img className="ml-24" src={roadMap} alt="roadmap-img" />

      <div className="relative overflow-hidden">
        <div className="frame-container flex items-stretch overflow-x-auto h-[80vh]">

          {/* Frame-1 */}
          <div className="frame w-screen h-full flex flex-col flex-shrink-0 p-4 justify-center">
            <div className="flex w-screen pl-20 items-center h-12 ">
              <span className="bg-[rgba(255,255,255,0.5)] rotate-[15deg] w-[10%] h-2 rounded-lg"></span>
              <span className="rounded-full h-4 w-4 bg-[white] self-end mb-[-0.25rem] mx-[-0.5rem]"></span>
              <span className="bg-[rgba(255,255,255,0.5)] rotate-[-1.9deg] w-[75%] h-2"></span>
              <span className="rounded-full h-4 w-4 bg-[white] self-start mt-[-0.25rem] mx-[-0.5rem]"></span>
            </div>
          </div>

          {/* Frame-2 */}
          <div className="frame w-screen h-full flex-shrink-0 p-4">
            <div className="bg-gray-200 h-full overflow-y-auto p-4">
              {/* Content for Frame 2 */}
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

      {/* <div className="flex overflow-x-scroll overflow-y-hidden w-[400vw] h-[80vh] border-2 border-red-500">

        <div className="flex items-center h-full w-screen pl-20 border-2 border-green-500">
          <div className="flex  w-screen items-center h-12 border-2 border-orange-500">
            <span className="bg-[rgba(255,255,255,0.5)] rotate-[15deg] w-[10%] h-2 rounded-lg"></span>
            <span className="rounded-full h-4 w-4 bg-[white] self-end mb-[-0.25rem] mx-[-0.5rem]"></span>
            <span className="bg-[rgba(255,255,255,0.5)] rotate-[-1.9deg] w-[75%] h-2"></span>
            <span className="rounded-full h-4 w-4 bg-[white] self-start mt-[-0.25rem] mx-[-0.5rem]"></span>
          </div>
        </div>

        <div className="flex bg-[white] w-screen h-full border-2 border-green-500"></div>
        <div className="flex bg-[green] w-screen h-full border-2 border-green-500"></div>
        <div className="flex bg-[orange] w-screen h-full border-2 border-green-500"></div>
      </div> */}
    </div>
  );
}
export default RoadMap;