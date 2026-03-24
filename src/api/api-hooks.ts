import { useEffect, useState } from "react";
import { api } from "./api-dev";
import type { IUseTrackDetailsResult, IUseTracksResult } from "./interfaces/api-hooks";

export const useTracks = (): IUseTracksResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<IUseTracksResult['tracks']>([]);

  useEffect(() => {
    api.getTracks().then(tracks => {
      setTracks(tracks);
      setIsLoading(false);
    });
  }, []);

  return { tracks, isLoading };
};

export const useTrackDetails = (trackId: string | null) => {
  const [track, setTrack] = useState<IUseTrackDetailsResult['track']>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [prevTrackId, setPrevTrackId] = useState(trackId);

  if (trackId !== prevTrackId) {
    console.log('Track ID changed, fetching new details');
    setPrevTrackId(trackId);
    setIsLoading(true);
    setTrack(null);
  }

  useEffect(() => {
    if (trackId) {
      api.getTrackDetails(trackId).then(fetchedTrack => {
        setTrack(fetchedTrack as IUseTrackDetailsResult['track']);
        setIsLoading(false);
      });
    }
  }, [trackId]);

  return { track, isLoading };
};