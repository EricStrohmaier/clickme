import { normalReactions, roastReactions, milestones, firstClickReaction } from "@/lib/reactionData";
import { Reaction } from "@/lib/types";

/**
 * Returns a random reaction from the pool, avoiding recently used ones
 */
export function getRandomReaction(usedReactionIds: string[], isRoastMode: boolean = false): Reaction {
  const reactions = isRoastMode ? roastReactions : normalReactions;
  
  // Filter out recently used reactions
  const availableReactions = reactions.filter(
    reaction => !usedReactionIds.includes(reaction.id)
  );
  
  // If we've used all reactions, just use the full list
  const reactionPool = availableReactions.length > 0 
    ? availableReactions 
    : reactions;
  
  // Get a random reaction
  const randomIndex = Math.floor(Math.random() * reactionPool.length);
  return reactionPool[randomIndex];
}

/**
 * Checks if there's a milestone reaction for the given click count
 */
export function getMilestoneReaction(clickCount: number): Reaction | null {
  const milestone = milestones.find(m => m.clickCount === clickCount);
  return milestone ? milestone.reaction : null;
}

/**
 * Returns the special first click reaction
 */
export function getFirstClickReaction(): Reaction {
  return firstClickReaction;
}