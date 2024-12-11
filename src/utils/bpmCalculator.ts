export function calculateRecommendedPace(bpm: number): number {
  // Basic formula: pace in minutes/km = 60 / (steps per minute / 2)
  // Assuming average running cadence is half the BPM
  const stepsPerMinute = bpm;
  const minutesPerKm = 60 / (stepsPerMinute / 2);
  return Math.round(minutesPerKm * 100) / 100;
}

export function getPaceRange(basePace: number): {
  easy: number;
  current: number;
  hard: number;
} {
  return {
    easy: Math.round((basePace * 1.2) * 100) / 100,
    current: basePace,
    hard: Math.round((basePace * 0.8) * 100) / 100,
  };
}