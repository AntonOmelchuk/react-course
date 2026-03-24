import { useEffect } from 'react';

function useOutsideClick(callback: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const isListItem = (event.target as HTMLElement)?.closest('li');

      if (!isListItem) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);
}

export default useOutsideClick;