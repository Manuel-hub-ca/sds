"use client"
import React from 'react';

const UpSideDown = ({bgColor}) => {

  return (
      <div className="absolute w-full top-0 h-[100px] -mt-1 overflow-hidden">
        <svg
          className="block w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 30,50 40,20 70,100 100,0" fill={bgColor} />
        </svg>
      </div>
  );
};

export default UpSideDown;