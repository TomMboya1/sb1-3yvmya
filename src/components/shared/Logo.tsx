import React from 'react';
import logo from './logo (1).png'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logo}
        alt="Elevate Her Logo" 
        className="h-10 w-100 object-cover border-2 border-red-300 rounded-md"
      />
      {/* <div className="flex flex-col">
        <span className="text-xl font-bold leading-none">Elevate</span>
        <span className="text-sm text-red-300">Her</span>
      </div> */}
    </div>
  );
}