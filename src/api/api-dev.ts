import tracksList from '../__mock__/tracksList';
import type { ITrack } from '../interfaces/ITrack';

export const api = {
  getTracks: (): Promise<ITrack[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(tracksList.data), 1000);
    });
  },
  getTrackDetails: (trackId: string): Promise<ITrack | null>  => {
    const track = tracksList.data.find(({ id }) => id === trackId);
    return new Promise((resolve) => {
      setTimeout(() => resolve(track || null), 1000);
    });
  }
}
