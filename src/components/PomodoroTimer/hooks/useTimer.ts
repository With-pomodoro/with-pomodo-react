import { useEffect, useState } from "react";
import {
  INIT_LONG_REST_TIME,
  INIT_REST_TIME,
  INIT_WORK_TIME,
} from "../constants";
import { TimerMode } from "../types";

type ReturnType = {
  remainingTime: number;
  startTimer: () => void;
  isStart: boolean;
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

const useTimer = (initMode: TimerMode): ReturnType => {
  const [mode, setMode] = useState<TimerMode>(initMode);
  const [remainingTime, setRemainignTime] = useState<number>(
    calcInitTime(initMode)
  );
  const [pomodoroCnt, setPomodoroCnt] = useState(0);

  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (mode === "work") {
      setPomodoroCnt((prev) => prev + 1);
    }
  }, [mode]);

  const switchMode = () => {
    if (mode === "longRest") {
      modeChange("work");
      return;
    }
    if (pomodoroCnt > 0 && pomodoroCnt % 4 === 0) {
      modeChange("longRest");
      return;
    }

    if (mode === "work") {
      modeChange("rest");
    } else if (mode === "rest") {
      modeChange("work");
    }
  };

  const resetTimer = (mode: TimerMode) => {
    setIsStart(false);
    setRemainignTime(calcInitTime(mode));
  };

  const modeChange = (mode: TimerMode) => {
    resetTimer(mode);
    setMode(mode);
  };

  const startTimer = () => {
    if (!isStart) {
      const intervalId = window.setInterval(() => {
        setRemainignTime((t) => {
          if (t > 0) {
            return t - 1;
          } else if (t === 0) {
            window.clearInterval(intervalId);
            switchMode();
            return t;
          } else {
            throw new Error("remaining time is nagative!!!");
          }
        });
      }, 1000);
      setIsStart(true);
    }
  };

  return { remainingTime, startTimer, isStart };
};

export default useTimer;
