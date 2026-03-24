import type { ITrack } from "../../interfaces/ITrack";
import { useTrackDetails } from "../../api/api-hooks";
import styles from "./details.module.css";

interface IProps {
  selectedTrack: ITrack | null;
}

const Details = ({ selectedTrack }: IProps) => {
  const { track, isLoading } = useTrackDetails(selectedTrack ? selectedTrack.id : null);

  if (isLoading) {
    return <div>Loading details...</div>;
  }

  if (!track) {
    return <div>Select a track to see details</div>;
  }

  if (track.attributes === undefined) {
    return <div>Details not available</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.block}>
        {track.attributes.title.length > 20 ? `${track.attributes.title.substring(0, 20)}...` : track.attributes.title}
        <p>Duration: {track.attributes.duration} seconds</p>
        <p>Artist: {track.attributes.user.name}</p>
        <p>Likes: {track.attributes.likesCount}</p>
      </div>
      <div className={styles.block}>
        {track.attributes.images?.main?.[0]?.url && (
          <img src={track.attributes.images.main[0].url} alt={track.attributes.title} style={{ maxWidth: "100%" }} />
        )}
      </div>
    </div>
  );
};

export default Details;
