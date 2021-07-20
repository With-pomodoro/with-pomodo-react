import { useCallback, useEffect, useState } from "react";
import { timeoutAudio } from "../../../shared/audios";
import { TimerMode, TimerStatus } from "../types";
import { calcLimitDate } from "../utils";
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
  const [limitDate, setLimitDate] = useState<Date>(calcLimitDate(mode));
  const [remainingTime, setRemainignTime] = useState<number>(
    calcInitTime(initMode)
  );

  const [pomodoroCnt, setPomodoroCnt] = useState(0);

  const decreaseTime = () => {
    setRemainignTime((t) => t - 1);
  };

  const switchMode = useCallback(() => {
    if (mode === "work") {
      setPomodoroCnt((prev) => prev + 1);
      setMode("rest");
      if (pomodoroCnt > 0 && pomodoroCnt % 4 === 0) {
        setMode("longRest");
        return;
      }
    } else if (mode === "rest") {
      setMode("work");
    } else if (mode === "longRest") {
      setMode("work");
    }
  }, [mode, pomodoroCnt]);

  const resetTimer = useCallback(() => {
    setRemainignTime(calcInitTime(mode));
  }, [mode]);

  useEffect(() => {
    resetTimer();
  }, [mode, resetTimer]);

  useEffect(() => {
    if (status === "run") {
      if (remainingTime >= 0) {
        setTimeout(() => {
          decreaseTime();
        }, nextTiming());
      } else {
        // 残り時間が負数になった時にタイムアップの処理を行う
        timeoutAudio.play();
        setStatus("pause");
        switchMode();
      }
    }
  }, [status, remainingTime, switchMode]);

  const startTimer = () => {
    if (status === "pause") {
      setStatus("run");
    }
  };

  return { remainingTime, startTimer, status, mode };
};

export default useTimer;
