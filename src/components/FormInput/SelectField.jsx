import React from "react";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#7C5DFA" : "#0C0E16",
    backgroundColor: "none",
    borderBottom: "1px solid #DFE3FA",
    padding: "1rem",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      cursor: state.isSelected ? "inherit" : "pointer",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    padding: ".4rem .6rem",
    boxShadow: "none",
    border: state.isFocused ? "1px solid #7C5DFA" : "1px solid lightFour",
    "&:hover": {
      border: state.isFocused ? "1px solid #7C5DFA" : "1px solid lightFour",
    },
    cursor: "pointer",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#7C5DFA",
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};

function SelectField({ options, field, form }) {
  return (
    <Select
      options={options}
      name={field.name}
      value={
        options ? options.find((option) => option.value === field.value) : ""
      }
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      placeholder={options[3].label}
      className="w-full my-0.5 text-sm font-bold text-darkFour caret-purple"
      styles={customStyles}
    />
  );
}

export default SelectField;
