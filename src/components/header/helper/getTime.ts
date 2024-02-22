import moment from "moment";

export const getTime = (): string => {
  const date = moment();

  return `${date.format("ddd")}, ${+date.format("d")} ${date.format(
    "MMMM"
  )} ${date.format("YYYY")}`;
};
