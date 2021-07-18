import breakPoints from "./breakPoints";

type MediaQueryGeneratorArg = {
  breakPoint: number;
  interface: "min" | "max";
};
const mediaQueryGenerator = (arg: MediaQueryGeneratorArg) => {
  return `@media screen and (${arg.interface}-width: ${arg.breakPoint}px)`;
};

const mediaQueries = {
  mobile: mediaQueryGenerator({
    interface: "max",
    breakPoint: breakPoints.mobile,
  }),
};

export default mediaQueries;
