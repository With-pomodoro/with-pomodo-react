import { useState } from "react";
import {
  INIT_LONG_REST_TIME,
  INIT_REST_TIME,
  INIT_WORK_TIME,
} from "../constants";
import { TimerMode } from "../types";

const useTime = (
  mode: TimerMode
): [number, (n: number) => void, () => void] => {
  let initTime: number;
  if (mode === "work") {
    initTime = INIT_WORK_TIME;
  } else if (mode === "rest") {
    initTime = INIT_REST_TIME;
  } else if (mode === "longRest") {
    initTime = INIT_LONG_REST_TIME;
  } else {
    throw new Error(`invalid mode:${mode}`);
  }

  const [remainingTime, setRemainignTime] = useState<number>(initTime);
  const [isStart, setIsStart] = useState(false);

  const startTimer = () => {
    if (!isStart) {
      setInterval(() => {
        setRemainignTime((t) => t - 1);
      }, 1000);
      setIsStart(true);
    }
  };

  return [remainingTime, setRemainignTime, startTimer];
};

export default useTime;
