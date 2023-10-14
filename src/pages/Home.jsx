import React from "react"
import NavBar from "../components/navbar/NavBar"
import Hero from "../components/hero/Hero"
import RoadMap from "../components/roadmap/RoadMap";
const Home = () => {
  return (
    <div className="bg-[black] min-h-screen">
      <NavBar />
      <Hero />
      <RoadMap />
    </div>
  )
};

export default Home;