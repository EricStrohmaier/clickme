"use client";

import { useEffect, useState, useRef } from "react";
import { Reaction } from "@/lib/types";
import Image from "next/image";

interface ReactionDisplayProps {
  reaction: Reaction | null;
}

export function ReactionDisplay({ reaction }: ReactionDisplayProps) {
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (reaction) {
      // Reset visibility first for animation to work on subsequent displays
      setVisible(false);
      
      // Create a small delay before showing the new reaction
      setTimeout(() => {
        setVisible(true);
        
        // Play sound if available
        if (reaction.content.soundSrc) {
          if (!audioRef.current) {
            audioRef.current = new Audio(reaction.content.soundSrc);
          } else {
            audioRef.current.src = reaction.content.soundSrc;
          }
          audioRef.current.play().catch(err => console.error("Audio playback error:", err));
        }
        
        // Handle voice if available
        if (reaction.content.voiceText && 'speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(reaction.content.voiceText);
          window.speechSynthesis.speak(utterance);
        }
      }, 100);
    }
  }, [reaction]);

  return (
    <div className="h-64 w-full flex items-center justify-center">
      {reaction ? (
        <div 
          className={`transition-all duration-300 flex items-center justify-center 
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          {reaction.content.text && (
            <p className="text-2xl font-medium text-center max-w-md">
              {reaction.content.text}
            </p>
          )}
          
          {reaction.content.imageSrc && (
            <div className="max-w-[250px] max-h-[250px] flex items-center justify-center">
              <img 
                src={reaction.content.imageSrc} 
                alt="Reaction"
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-64 h-40"></div>
      )}
    </div>
  );
}