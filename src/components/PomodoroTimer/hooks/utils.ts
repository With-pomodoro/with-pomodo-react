import {
  INIT_LONG_REST_TIME,
  INIT_REST_TIME,
  INIT_WORK_TIME,
} from "../constants";
import { TimerMode } from "../types";

export const calcInitTime = (mode: TimerMode) => {
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

export const nextTiming = () => 1000 - (Date.now() % 1000);
