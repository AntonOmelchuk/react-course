export interface ITrack {
  id: string;
  attributes: {
    title: string;
    attachments: {
      url: string;
    }[];
  }
}

export interface ITrackDetails {
  attributes: {
    title: string;
    duration: number;
    likesCount: number;
    dislikesCount: number;
    currentUserReaction: number;
    user: {
      name: string;
    }
    images?: {
      main?: {
        url: string
      }[]
    }
  };
}