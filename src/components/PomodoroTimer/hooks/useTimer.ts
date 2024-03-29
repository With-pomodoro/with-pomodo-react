import { useCallback, useEffect, useState } from "react";
import { timeoutAudio } from "../../../shared/audios";
import { TimerMode, TimerStatus } from "../types";
import { calcInitTime, calcLimitDate, nextTiming } from "./utils";

type ReturnType = {
  remainingTime: number;
  startTimer: () => void;
  status: TimerStatus;
  mode: TimerMode;
};

const useTimer = (initMode: TimerMode): ReturnType => {
  const [mode, setMode] = useState<TimerMode>(initMode);
  const [status, setStatus] = useState<TimerStatus>("pause");
  const [limitDate, setLimitDate] = useState<Date>();
  const [remainingTime, setRemainingTime] = useState<number>(
    calcInitTime(initMode)
  );

  const [pomodoroCnt, setPomodoroCnt] = useState(1);

  const updateTime = useCallback(() => {
    if (limitDate == null) return;

    // 現在時刻と startTimer 関数が設定した limitDate との差を残り時間とする
    const now = new Date();
    const diffSec = Math.floor((limitDate.getTime() - now.getTime()) / 1000);
    // 場合によって、diffSec === remainingTime が真となり更新が起こらない場合があるその時のために、同一だった場合は remainingTime - 1 を設定する
    // 更新が行われないと、useEffect が発火されないのでタイマーが止まってしまう。
    setRemainingTime((t) => (t === diffSec ? t - 1 : diffSec));
  }, [limitDate]);

  const switchMode = useCallback(() => {
    if (mode === "work") {
      setPomodoroCnt((prev) => prev + 1);
      if (pomodoroCnt > 0 && pomodoroCnt % 4 === 0) {
        setMode("longRest");
      } else {
        setMode("rest");
      }
    } else if (mode === "rest" || mode === "longRest") {
      setMode("work");
    }
  }, [mode, pomodoroCnt]);

  useEffect(() => {
    setRemainingTime(calcInitTime(mode));
  }, [mode]);

  useEffect(() => {
    if (status === "run") {
      if (remainingTime >= 0) {
        setTimeout(() => {
          updateTime();
        }, nextTiming());
      } else {
        // 残り時間が負数になった時にタイムアップの処理を行う
        timeoutAudio.play();
        setStatus("pause");
        switchMode();
      }
    }
  }, [status, remainingTime, switchMode, updateTime]);

  const startTimer = () => {
    if (status === "pause") {
      setStatus("run");
      setLimitDate(calcLimitDate(mode));
    }
  };

  return { remainingTime, startTimer, status, mode };
};

export default useTimer;
