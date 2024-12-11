import { useState, useCallback } from 'react';
import { WorkoutSession } from '../types';

interface WorkoutPlannerState {
  duration: number;
  intensity: WorkoutSession['intensity'];
}

export function useWorkoutPlanner() {
  const [plannerState, setPlannerState] = useState<WorkoutPlannerState>({
    duration: 30,
    intensity: 'medium',
  });

  const updateDuration = useCallback((duration: number) => {
    setPlannerState(prev => ({ ...prev, duration }));
  }, []);

  const updateIntensity = useCallback((intensity: WorkoutSession['intensity']) => {
    setPlannerState(prev => ({ ...prev, intensity }));
  }, []);

  const generatePlaylist = useCallback(async () => {
    // TODO: Implement playlist generation based on duration and intensity
    console.log('Generating playlist with:', plannerState);
  }, [plannerState]);

  return {
    ...plannerState,
    updateDuration,
    updateIntensity,
    generatePlaylist,
  };
}