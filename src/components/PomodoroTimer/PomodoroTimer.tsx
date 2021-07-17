import React, { FC, useState } from "react";
import { ClassNameProps } from "../../shared/types";
import useTimer from "./hooks/useTimer";
import { TimerMode } from "./types";

const PomodoroTimer: FC<ClassNameProps> = ({ className }) => {
  const [timerMode] = useState<TimerMode>("work");
  // 秒で計算する
  const { remainingTime, startTimer } = useTimer(timerMode);

  return (
    <div className={className}>
      <span>{remainingTime}</span>
      <br />
      <button onClick={() => startTimer()}>start!</button>
      <br />
    </div>
  );
};
export default PomodoroTimer;
