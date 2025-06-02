"use client";

import { useState, useEffect } from "react";
import { getRandomReaction, getMilestoneReaction, getFirstClickReaction } from "@/lib/reactionHelpers";
import { Reaction, ReactionType } from "@/lib/types";

export function useReactions() {
  const [clickCount, setClickCount] = useState(0);
  const [currentReaction, setCurrentReaction] = useState<Reaction | null>(null);
  const [isRoastMode, setIsRoastMode] = useState(false);
  const [usedReactions, setUsedReactions] = useState<string[]>([]);
  const [isFirstSession, setIsFirstSession] = useState(true);

  useEffect(() => {
    // Check if this is the first session
    const hasClickedBefore = localStorage.getItem("hasClickedBefore");
    if (hasClickedBefore) {
      setIsFirstSession(false);
    }

    // Retrieve click count from localStorage if available
    const savedClickCount = localStorage.getItem("clickCount");
    if (savedClickCount) {
      setClickCount(parseInt(savedClickCount, 10));
    }
  }, []);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    // Save to localStorage
    localStorage.setItem("clickCount", newClickCount.toString());
    
    // If first click of first session, play the fart sound
    if (newClickCount === 1 && isFirstSession) {
      const fartReaction = getFirstClickReaction();
      setCurrentReaction(fartReaction);
      setUsedReactions([...usedReactions, "fart"]);
      localStorage.setItem("hasClickedBefore", "true");
      return;
    }

    // Check if there's a milestone reaction for this click count
    const milestoneReaction = getMilestoneReaction(newClickCount);
    if (milestoneReaction) {
      setCurrentReaction(milestoneReaction);
      return;
    }

    // Otherwise get a random reaction, avoiding recently used ones
    const reaction = getRandomReaction(usedReactions, isRoastMode);
    setCurrentReaction(reaction);
    
    // Update used reactions list, keeping only the last 5
    setUsedReactions(prev => {
      const updated = [...prev, reaction.id];
      return updated.length > 5 ? updated.slice(-5) : updated;
    });
  };

  return {
    clickCount,
    currentReaction,
    handleClick,
    isRoastMode,
    setIsRoastMode
  };
}