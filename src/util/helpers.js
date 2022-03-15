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

export const capitalize = (word) => {
  const lowercase = word.toLowerCase();
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + lowercase.slice(1);
};

export const formatMoney = (num) => {
  const formattedNum = num.toFixed(2);
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    formattedNum
  );
};
