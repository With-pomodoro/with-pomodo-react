const fillZero = (num: number) => {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
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
