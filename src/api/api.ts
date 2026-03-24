import { API_KEY, TRACKS_URL } from "../constants/general";
import type { ITrack } from "../interfaces/ITrack";

export const api = {
  getTracks: (): Promise<ITrack[]> => {
    return fetch(TRACKS_URL, {
      headers: {
        'api-key': API_KEY
      }
    }).then(response => response.json())
    .then(json => json.data || [])
    .catch(e => {
      console.error('Error fetching tracks', e);
      return [];
    });
    },
  getTrackDetails: (trackId: string): Promise<ITrack | null>  => {
    return fetch(`${TRACKS_URL}/${trackId}`, {
      headers: {
        'api-key': API_KEY
      }
    }).then(response => response.json())
    .then(json => json.data || null)
    .catch(e => {
      console.error('Error fetching track details', e);
      return null;
    });
  }
}
