import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=100&h=100" 
        alt="Elevate Her Logo" 
        className="h-10 w-10 object-cover border-2 border-red-300 rounded-md"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-none">Elevate</span>
        <span className="text-sm text-red-300">Her</span>
      </div>
    </div>
  );
}