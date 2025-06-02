"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function BoltBadge() {
  const [size, setSize] = useState(60);
  
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth < 640 ? 40 : 60;
      setSize(newSize);
    };
    
    // Set initial size
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link 
      href="https://bolt.new/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute top-4 right-4 z-10 transition-transform hover:scale-110"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <img 
          src="/black_circle_360x360.png" 
          alt="Bolt" 
          width={size} 
          height={size} 
          className="rounded-full"
        />
      </div>
    </Link>
  );
}