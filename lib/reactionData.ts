import { Reaction, Milestone } from "@/lib/types";

// Roast mode reactions
export const roastReactions: Reaction[] = [
  {
    id: "roast-6",
    type: "combined",
    mode: "roast",
    content: {
      text: "You're like a Windows update - nobody wants you, but here you are.",
      voiceText: "You're like a Windows update - nobody wants you, but here you are.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "roast-7",
    type: "combined",
    mode: "roast",
    content: {
      text: "Your coding style is like a mystery novel - confusing and full of plot holes.",
      voiceText: "Your coding style is like a mystery novel - confusing and full of plot holes.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-laugh-applause-437.mp3"
    }
  },
  {
    id: "roast-8",
    type: "combined",
    mode: "roast",
    content: {
      text: "You're the human equivalent of a 404 error.",
      voiceText: "You're the human equivalent of a 404 error.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "roast-9",
    type: "combined",
    mode: "roast",
    content: {
      text: "If you were a CSS property, you'd be display: none;",
      voiceText: "If you were a CSS property, you'd be display: none;",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-laugh-applause-437.mp3"
    }
  },
  {
    id: "roast-10",
    type: "combined",
    mode: "roast",
    content: {
      text: "Your attention span is shorter than a JavaScript callback.",
      voiceText: "Your attention span is shorter than a JavaScript callback.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "roast-1",
    type: "combined",
    mode: "roast",
    content: {
      text: "Your browser history is probably more embarrassing than your search history.",
      voiceText: "Your browser history is probably more embarrassing than your search history.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "roast-2",
    type: "combined",
    mode: "roast",
    content: {
      text: "You're the human equivalent of a participation trophy.",
      voiceText: "You're the human equivalent of a participation trophy.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-laugh-applause-437.mp3"
    }
  },
  {
    id: "roast-3",
    type: "combined",
    mode: "roast",
    content: {
      text: "I bet you think Instagram filters make you look good.",
      voiceText: "I bet you think Instagram filters make you look good.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "roast-4",
    type: "combined",
    mode: "roast",
    content: {
      text: "Your selfies are the reason phones have a front camera warning.",
      voiceText: "Your selfies are the reason phones have a front camera warning.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-laugh-applause-437.mp3"
    }
  },
  {
    id: "roast-5",
    type: "combined",
    mode: "roast",
    content: {
      text: "You're the reason we need instructions on shampoo bottles.",
      voiceText: "You're the reason we need instructions on shampoo bottles.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  }
];

// Main reactions pool - these will be randomly selected
export const normalReactions: Reaction[] = [
  {
    id: "mind-blown",
    type: "combined",
    content: {
      text: "🤯 Mind = Blown",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3"
    }
  },
  {
    id: "party-time",
    type: "image",
    content: {
      text: "PARTY TIME! 🎉",
      imageSrc: "https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif"
    }
  },
  {
    id: "cat-vibing",
    type: "image",
    content: {
      text: "Vibing with you! 😺",
      imageSrc: "https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif"
    }
  },
  {
    id: "dramatic",
    type: "combined",
    content: {
      text: "🎭 Such drama, much wow!",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-cinematic-impact-sound-2438.mp3"
    }
  },
  {
    id: "achievement",
    type: "combined",
    content: {
      text: "🏆 Achievement Unlocked: Professional Button Clicker",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3"
    }
  },
  {
    id: "time-waste",
    type: "voice",
    content: {
      text: "Congratulations! You've successfully wasted 5 more seconds of your life!",
      voiceText: "Congratulations! You've successfully wasted 5 more seconds of your life!"
    }
  },
  {
    id: "conspiracy",
    type: "voice",
    content: {
      text: "What if every click is being recorded by aliens? 👽",
      voiceText: "What if every click is being recorded by aliens?"
    }
  },
  {
    id: "rick-roll",
    type: "image",
    content: {
      text: "Never gonna give you up!",
      imageSrc: "https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif"
    }
  },
  {
    id: "matrix",
    type: "voice",
    content: {
      text: "What if I told you... this button does nothing?",
      voiceText: "What if I told you... this button does nothing?"
    }
  },
  {
    id: "drumroll",
    type: "combined",
    content: {
      text: "🥁 Drumroll please...",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-drum-roll-566.mp3"
    }
  },
  {
    id: "plot-twist",
    type: "voice",
    content: {
      text: "Plot twist: The button has been clicking you this whole time! 😱",
      voiceText: "Plot twist: The button has been clicking you this whole time!"
    }
  },
  {
    id: "loading",
    type: "text",
    content: {
      text: "Loading next reaction... Just kidding, keep clicking!"
    }
  },
  {
    id: "therapy",
    type: "text",
    content: {
      text: "Have you considered button-clicking therapy? It's a real thing... maybe."
    }
  },
  {
    id: "quantum",
    type: "voice",
    content: {
      text: "In a parallel universe, this button clicks itself.",
      voiceText: "In a parallel universe, this button clicks itself."
    }
  },
  {
    id: "meditation",
    type: "combined",
    content: {
      text: "🧘 Inner peace achieved through mindful clicking",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-magic-sweep-game-trophy-257.mp3"
    }
  },
  {
    id: "dad-joke",
    type: "voice",
    content: {
      text: "Why don't buttons tell dad jokes? Because they always get pressed!",
      voiceText: "Why don't buttons tell dad jokes? Because they always get pressed!"
    }
  },
  {
    id: "wow",
    type: "combined",
    mode: "normal",
    content: {
      text: "Wow! That was satisfying!",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3"
    }
  },
  {
    id: "no",
    type: "combined",
    content: {
      text: "No, not again... please stop.",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3"
    }
  },
  {
    id: "click-addiction",
    type: "text",
    content: {
      text: "You might have a click addiction. Just saying."
    }
  },
  {
    id: "why",
    type: "text",
    content: {
      text: "Why are you still clicking me?"
    }
  },
  {
    id: "applause",
    type: "sound",
    content: {
      text: "👏👏👏",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-applause-437.mp3"
    }
  },
  {
    id: "boom",
    type: "sound",
    content: {
      text: "💥",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3"
    }
  },
  {
    id: "meow",
    type: "combined",
    content: {
      text: "Meow!",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-domestic-cat-hungry-meow-45.mp3"
    }
  },
  {
    id: "alert",
    type: "combined",
    content: {
      text: "⚠️ ALERT: Critical button press detected!",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
    }
  },
  {
    id: "thinking",
    type: "image",
    content: {
      text: "Hmm...",
      imageSrc: "https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif"
    }
  },
  {
    id: "dance",
    type: "image",
    content: {
      imageSrc: "https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif"
    }
  },
  {
    id: "existential",
    type: "voice",
    content: {
      text: "What if this button is the only thing keeping the universe in balance?",
      voiceText: "What if this button is the only thing keeping the universe in balance?"
    }
  },
  {
    id: "space",
    type: "combined",
    content: {
      text: "🚀 To infinity and beyond!",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-fast-rocket-whoosh-1714.mp3"
    }
  },
  {
    id: "laugh",
    type: "sound",
    content: {
      text: "😂",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-crowd-laugh-424.mp3"
    }
  },
  {
    id: "typing",
    type: "combined",
    content: {
      text: "Click click click...",
      soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-typewriter-soft-type-1-29.mp3"
    }
  },
  {
    id: "impressed",
    type: "text",
    content: {
      text: "I'm impressed by your dedication."
    }
  }
];

// Special reaction for first click
export const firstClickReaction: Reaction = {
  id: "fart",
  type: "sound",
  content: {
    text: "💨",
    soundSrc: "https://assets.mixkit.co/sfx/preview/mixkit-cartoon-fart-sound-2891.mp3"
  }
};

// Milestone reactions that trigger at specific click counts
export const milestones: Milestone[] = [
  {
    clickCount: 7,
    reaction: {
      id: "milestone-7",
      type: "combined",
      content: {
        text: "You sure this is worth it?",
        voiceText: "You sure this is worth it?"
      }
    }
  },
  {
    clickCount: 13,
    reaction: {
      id: "milestone-13",
      type: "combined",
      content: {
        text: "Did you call your mom today?",
        voiceText: "Did you call your mom today?"
      }
    }
  },
  {
    clickCount: 42,
    reaction: {
      id: "milestone-42",
      type: "combined",
      content: {
        text: "You found the answer to everything.",
        voiceText: "You found the answer to everything."
      }
    }
  },
  {
    clickCount: 69,
    reaction: {
      id: "milestone-69",
      type: "combined",
      content: {
        text: "Nice.",
        voiceText: "Nice."
      }
    }
  },
  {
    clickCount: 100,
    reaction: {
      id: "milestone-100",
      type: "combined",
      content: {
        text: "You've reached the end of the internet.",
        voiceText: "You've reached the end of the internet."
      }
    }
  }
];