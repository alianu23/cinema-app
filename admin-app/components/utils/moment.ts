import moment from "moment";

export const momentChange = (date: string) => {
  const dt = moment(date).add(10, "days").calendar();
  return dt;
};
