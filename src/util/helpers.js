export const formatDate = (date) => {
  // yyyy-mm-dd -> dd MMM yyyy
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateArr = date.split("-");
  const year = dateArr[0];
  const day = dateArr[2];

  const monthIndex = parseInt(dateArr[1]) - 1;
  const month = months[monthIndex];

  return `${day} ${month} ${year}`;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
