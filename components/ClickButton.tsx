"use client";

import { Button } from "@/components/ui/button";
import { useState, useContext } from "react";

interface ClickButtonProps {
  onClick: () => void;
  isRoastMode?: boolean;
}

export function ClickButton({ onClick, isRoastMode = false }: ClickButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = () => {
    setIsPressed(true);
    onClick();
    
    // Reset the pressed state after animation completes
    setTimeout(() => {
      setIsPressed(false);
    }, 150);
  };

  return (
    <Button
      className={`text-2xl font-bold py-10 px-14 transition-all rounded-xl ${
        isPressed 
          ? "bg-primary/80 scale-95" 
          : "bg-primary hover:bg-primary/80 hover:scale-105"
      }`}
      onClick={handleClick}
    >
      {isRoastMode ? "ROAST ME" : "CLICK ME"}
    </Button>
  );
}