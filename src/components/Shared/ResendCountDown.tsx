import React, { useEffect, useState } from "react";

interface ResendCountDownProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onComplete: () => void;
}

const ResendCountDown: React.FC<ResendCountDownProps> = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  onComplete,
}) => {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    if (time <= 0) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onComplete]);

  const formatTime = (time: number) => {
    const secs = time % 60;
    return `${secs < 10 ? "0" : ""}${secs}`;
  };

  return <div className='text-red-500 font-semibold'>{formatTime(time)}</div>;
};

export default ResendCountDown;
