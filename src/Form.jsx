import React from "react";

function Form({ open, title }) {
  // temporary background color
  let style =
    "bg-purple absolute inset-y-0 -left-full flex justify-center items-center transition-all duration-300 w-full sm:rounded-r-xl sm:w-1/2 sm:-left-1/2 xl:w-1/3 xl:-left-1/3";

  return (
    <div className={open ? style + " translate-x-full" : style}>
      <h1>{title}</h1>
    </div>
  );
}

export default Form;
