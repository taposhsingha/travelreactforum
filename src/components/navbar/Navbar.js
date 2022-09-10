import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handlePlaces = () => {
    navigate("/touristplaces");
  };
  const handlehome = () => {
    navigate("/home");
  };
  return (
    <div className="flex justify-between py-5 ml-9">
      <div>
        <h2 className="font-bold text-4xl text-white">travel+</h2>
      </div>
      <div className="flex space-x-8 mr-9">
        <button className="font-bold text-white" onClick={handlehome}>
          Home
        </button>
        <button className="text-white">Travel Advice</button>
        <button className="text-white" onClick={handlePlaces}>
          Travel Spots
        </button>
        <button className="text-white">Map</button>
        <button className="text-white">Forum</button>
        <button className="text-white">Travel Planner</button>
        <h2 className="text-sm mt-2 text-white">My account</h2>
      </div>
    </div>
  );
};

export default Navbar;
