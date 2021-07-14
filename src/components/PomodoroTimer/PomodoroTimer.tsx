import React, { FC, useState } from "react";
import { ClassNameProps } from "../../shared/types";
import useTime from "./hooks/useTime";
import { TimerMode } from "./types";

const PomodoroTimer: FC<ClassNameProps> = ({ className }) => {
  const [timerMode] = useState<TimerMode>("work");
  // 秒で計算する
  const { remainingTime, startTimer, modeChange } = useTime(timerMode);

  return (
    <div className={className}>
      <span>{remainingTime}</span>
      <br />
      <button onClick={() => startTimer()}>start!</button>
      <br />
      <button onClick={() => modeChange("rest")}>mode change!!!</button>
    </div>
  );
};
export default PomodoroTimer;
