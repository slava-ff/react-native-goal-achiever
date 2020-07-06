const getDateNowDDMMYYY = () => {
  const date = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const myDate = `${day} ${month} ${year}`;

  return myDate;
};

export default getDateNowDDMMYYY;
