"use client";

import { useState, useEffect } from "react";
import { ClickButton } from "@/components/ClickButton";
import { ReactionDisplay } from "@/components/ReactionDisplay";
import { useReactions } from "@/hooks/useReactions";
import { InfoModal } from "@/components/InfoModal";
import { MultiplayerStatus } from "@/components/MultiplayerStatus";
import { BoltBadge } from "@/components/BoltBadge";
import { ReactionType } from "@/lib/types";
import {Switch} from "@/components/ui/switch";

export default function Home() {
  const { 
    clickCount, 
    currentReaction, 
    handleClick,
    isRoastMode,
    setIsRoastMode
  } = useReactions();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <BoltBadge />
      <MultiplayerStatus />
      <div className="flex flex-col items-center justify-center">
        <ReactionDisplay reaction={currentReaction} />
        <ClickButton onClick={handleClick} />
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-600">Roast Mode</span>
          <Switch
            className="text-gray-400"
            checked={isRoastMode}
            onCheckedChange={setIsRoastMode}
            aria-label="Toggle roast mode"
          />
        </div>
        
      </div>
     
      <InfoModal />
       <div className="text-sm text-gray-400 mt-8">
          You clicked {clickCount} times
        </div>
    </main>
  );
}