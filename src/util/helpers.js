export const formatDate = (date) => {
  // yyyy/mm/dd -> dd MMM yyyy
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

  const dateArr = date.split("/");
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

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const firstLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const secondLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const num = randomIntFromInterval(1000, 9999);

  return firstLetter + secondLetter + num;
};

export const generateFutureDate = (date, daysToAdd) => {
  const newDate = new Date();
  newDate.setDate(date.getDate() + daysToAdd);
  return new Date(newDate);
};

export const formOpenStyles = () => {
  document.documentElement.style.height = "100vh";
  document.documentElement.style.overflow = "hidden";
  document.body.style.position = "fixed";
};

export const formCloseStyles = () => {
  document.documentElement.style.height = "auto";
  document.documentElement.style.overflow = "scroll";
  document.body.style.position = "static";
};
