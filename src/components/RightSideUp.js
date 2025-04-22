"use client"
import React from 'react';

const RightSideUp = ({ bgColor }) => {


  return (
    <div
      className={`absolute w-full bottom-0 right-0 h-[100px] -mb-1 overflow-hidden`}
    >
      <svg
        className="block w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,100 30,50 40,80 70,0 100,100"
          fill={bgColor}
        />
      </svg>
    </div>
  );
};

export default RightSideUp