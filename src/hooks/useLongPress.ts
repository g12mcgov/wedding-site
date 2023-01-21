import { useState, useEffect } from "react";

export interface LongPress {
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
}

interface LongPressProps {
  onStart: () => void;
  onEnd: () => void;
  ms: number;
}

// Taken from https://stackoverflow.com/questions/48048957/react-long-press-event
export default function useLongPress(props: LongPressProps) {
  const { onStart, onEnd, ms } = props;

  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId: null | NodeJS.Timeout;
    if (startLongPress) {
      timerId = setTimeout(onStart, ms);
    } else {
      onEnd();
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [onStart, onEnd, ms, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  };
}
