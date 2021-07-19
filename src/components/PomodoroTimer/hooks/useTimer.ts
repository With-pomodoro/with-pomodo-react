import { useCallback, useEffect, useState } from "react";
import { timeoutAudio } from "../../../shared/audios";
import { TimerMode, TimerStatus } from "../types";
import { calcInitTime, nextTiming } from "./utils";

type ReturnType = {
  remainingTime: number;
  startTimer: () => void;
  status: TimerStatus;
  mode: TimerMode;
};

const useTimer = (initMode: TimerMode): ReturnType => {
  const [mode, setMode] = useState<TimerMode>(initMode);
  const [status, setStatus] = useState<TimerStatus>("pause");
  const [remainingTime, setRemainignTime] = useState<number>(
    calcInitTime(initMode)
  );
  const [pomodoroCnt, setPomodoroCnt] = useState(0);

  const decreaseTime = () => {
    setRemainignTime((t) => t - 1);
  };

  const modeChange = useCallback((mode: TimerMode) => {
    resetTimer(mode);
    setMode(mode);
  }, []);

  const switchMode = useCallback(() => {
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
  }, [mode, modeChange, pomodoroCnt]);

  useEffect(() => {
    if (mode === "work") {
      setPomodoroCnt((prev) => prev + 1);
    }
  }, [mode]);

  useEffect(() => {
    if (status === "run" && remainingTime >= 0) {
      setTimeout(() => {
        decreaseTime();
      }, nextTiming());
    }
  }, [status, remainingTime]);

  useEffect(() => {
    if (remainingTime < 0) {
      timeoutAudio.play();
      setStatus("pause");
      switchMode();
    }
  }, [remainingTime, switchMode]);

  const resetTimer = (mode: TimerMode) => {
    setRemainignTime(calcInitTime(mode));
  };

  const startTimer = () => {
    if (status === "pause") {
      setStatus("run");
    }
  };

  return { remainingTime, startTimer, status, mode };
};

export default useTimer;
