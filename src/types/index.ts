export interface Track {
  id: string;
  name: string;
  artist: string;
  bpm: number;
  duration: number;
  albumArt: string;
}

export interface WorkoutSession {
  targetPace: number;
  duration: number;
  intensity: 'low' | 'medium' | 'high';
}

export interface SpeedRecommendation {
  trackId: string;
  recommendedPace: number;
  bpm: number;
}