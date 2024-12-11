import { useState, useCallback } from 'react';

interface SpotifyAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useSpotifyAuth() {
  const [authState, setAuthState] = useState<SpotifyAuthState>({
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  const connect = useCallback(async () => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement Spotify OAuth flow
      setAuthState(prev => ({ ...prev, isAuthenticated: true }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to connect to Spotify',
      }));
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  return {
    ...authState,
    connect,
  };
}