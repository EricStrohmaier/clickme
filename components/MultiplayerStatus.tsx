"use client";

import { useState, useEffect } from "react";

export function MultiplayerStatus() {
  const [userCount, setUserCount] = useState(0);
  
  useEffect(() => {
    // Generate random initial count between 3 and 15
    const initialCount = Math.floor(Math.random() * 13) + 3;
    setUserCount(initialCount);
    
    // Simulate user count changes
    const interval = setInterval(() => {
      setUserCount(prevCount => {
        // Randomly increase or decrease by 0-2 users, but keep it between 1 and 20
        const change = Math.floor(Math.random() * 3) * (Math.random() > 0.5 ? 1 : -1);
        const newCount = Math.max(1, Math.min(20, prevCount + change));
        return newCount;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 left-4 bg-primary/10 px-4 py-2 rounded-full text-sm flex items-center">
      <div className="mr-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="font-medium text-primary">
        {userCount} {userCount === 1 ? 'person' : 'people'} clicking now
      </span>
    </div>
  );
}