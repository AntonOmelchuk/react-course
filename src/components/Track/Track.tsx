import clsx from 'clsx';
import styles from './track.module.css';

interface IProps {
  id: string;
  attributes: {
    title: string;
    attachments: {
      url: string;
    }[];
  };
  selectedTrackId?: string;
  callback: () => void;
}

function Track({ id, attributes, selectedTrackId, callback }: IProps) {

  const className = clsx({
    [styles.main]: true,
    [styles.selected]: selectedTrackId === id,
  });

  return (
     <li key={id} className={className}>
      <div onClick={callback}>
        <div>{attributes.title.slice(0, 20)}...</div>
        <audio src={attributes.attachments[0].url} controls></audio>
      </div>
    </li>
  )
}

export default Track