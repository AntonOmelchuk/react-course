import type { ITrack } from "../../interfaces/ITrack";
import Track from "../Track/Track";
import OverlayLoader from "../Overlay/OverlayLoader";
import { useTracks } from "../../api/api-hooks";
import styles from "./tracks.module.css";


interface IProps {
  selectedTrack: ITrack | null;
  onTrackSelect: (track: ITrack) => void;
}

function Tracks({ selectedTrack, onTrackSelect }: IProps) {
  const { tracks, isLoading } = useTracks();

  return <>
    <OverlayLoader isLoading={isLoading} />
    {!isLoading && tracks.length === 0 ? <h3>No Tracks</h3> : (
        <ul className={styles.list}>
          {tracks.map(({ id, attributes }, idx, arr) => (
            <Track
              id={id}
              attributes={attributes}
              selectedTrackId={selectedTrack?.id}
              callback={() => {
                onTrackSelect(arr[idx]);
              }}
            />
          ))}
        </ul>
      )
    }
  </>
}

export default Tracks