import { TimerMode } from "./types";

const fillZero = (num: number) => {
  // 負数を0とする
  const positiveNum = num >= 0 ? num : 0;
  if (num < 10) {
    return "0" + String(positiveNum);
  } else {
    return String(positiveNum);
  }
};

export const convertTime = (secOfTime: number) => {
  const min = Math.floor(secOfTime / 60);
  const sec = secOfTime % 60;
  return {
    min: fillZero(min),
    sec: fillZero(sec),
  };
};

export const convModeForView = (mode: TimerMode) => {
  if (mode === "work") {
    return "work";
  } else if (mode === "rest") {
    return "rest";
  } else if (mode === "longRest") {
    return "long rest";
  } else {
    throw new Error(`${mode} is not TimerMode type`);
  }
};
