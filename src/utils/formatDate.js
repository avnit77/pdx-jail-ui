import dayjs from 'dayjs';

const short = 'YYYY-MM-DD';
const long = 'YYYY-MM-DDTHH:mm:ss';
const dateToStringShort = (date) => dayjs(date).format(short).toString();
const dateToStringLong = (date) => {
  //if date is not provided (undefined) will return current date
  return dayjs(date).format(long);
};

export { dateToStringShort, dateToStringLong};
