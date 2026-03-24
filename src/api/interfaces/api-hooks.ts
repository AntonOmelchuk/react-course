import type { ITrack, ITrackDetails } from "../../interfaces/ITrack";

export interface IUseTracksResult {
  tracks: ITrack[];
  isLoading: boolean;
}

export interface IUseTrackDetailsResult {
  track: ITrackDetails | null;
  isLoading: boolean;
}
