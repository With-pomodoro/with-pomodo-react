import { useState } from "react";
import {
  INIT_LONG_REST_TIME,
  INIT_REST_TIME,
  INIT_WORK_TIME,
} from "../constants";
import { TimerMode } from "../types";

type ReturnType = {
  remainingTime: number;
  startTimer: () => void;
  modeChange: (mode: TimerMode) => void;
};

const calcInitTime = (mode: TimerMode) => {
  if (mode === "work") {
    return INIT_WORK_TIME;
  } else if (mode === "rest") {
    return INIT_REST_TIME;
  } else if (mode === "longRest") {
    return INIT_LONG_REST_TIME;
  } else {
    throw new Error(`invalid mode:${mode}`);
  }
};

const useTime = (mode: TimerMode): ReturnType => {
  const [remainingTime, setRemainignTime] = useState<number>(
    calcInitTime(mode)
  );

  const [isStart, setIsStart] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const startTimer = () => {
    if (!isStart) {
      const id = window.setInterval(() => {
        setRemainignTime((t) => {
          if (t > 0) {
            return t - 1;
          } else {
            window.clearInterval(id);
            return t;
          }
        });
      }, 1);
      setIntervalId(id);
      setIsStart(true);
    }
  };

  const resetTimer = () => {
    window.clearInterval(intervalId);
    setIsStart(false);
  };

  const modeChange = (mode: TimerMode) => {
    resetTimer();
    setRemainignTime(calcInitTime(mode));
  };

  return { remainingTime, startTimer, modeChange };
};

export default useTime;
