import { Voice, VoiceSettings } from 'elevenlabs-node';
import { normalReactions, roastReactions } from '../lib/reactionData';
import fs from 'fs/promises';
import path from 'path';

const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;

// Different voice IDs for variety
const VOICE_IDS = {
  normal: "21m00Tcm4TlvDq8ikWAM", // Rachel - calm, friendly
  roast: "VR6AewLTigWG4xSOukaG"    // Antoni - sarcastic, edgy
};

async function generateVoiceFile(text: string, voiceId: string, outputPath: string) {
  if (!ELEVEN_LABS_API_KEY) {
    throw new Error('ELEVEN_LABS_API_KEY environment variable is required');
  }

  const voice = new Voice(ELEVEN_LABS_API_KEY);
  
  const settings: VoiceSettings = {
    stability: 0.5,
    similarity_boost: 0.75
  };

  try {
    const audioBuffer = await voice.textToSpeech(voiceId, text, settings);
    await fs.writeFile(outputPath, audioBuffer);
    console.log(`Generated voice file: ${outputPath}`);
  } catch (error) {
    console.error(`Failed to generate voice for text: ${text}`, error);
  }
}

async function generateAllVoices() {
  const audioDir = path.join(process.cwd(), 'public', 'audio');
  
  // Ensure audio directory exists
  await fs.mkdir(audioDir, { recursive: true });

  // Generate for normal reactions
  for (const reaction of normalReactions) {
    if (reaction.content.voiceText) {
      const outputPath = path.join(audioDir, `${reaction.id}.mp3`);
      await generateVoiceFile(reaction.content.voiceText, VOICE_IDS.normal, outputPath);
    }
  }

  // Generate for roast reactions
  for (const reaction of roastReactions) {
    if (reaction.content.voiceText) {
      const outputPath = path.join(audioDir, `${reaction.id}.mp3`);
      await generateVoiceFile(reaction.content.voiceText, VOICE_IDS.roast, outputPath);
    }
  }
}

// Run the script
generateAllVoices().catch(console.error);