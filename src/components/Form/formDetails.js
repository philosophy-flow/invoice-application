import { object, string, number, date, array } from "yup";

const selectOptions = [
  { value: "day", label: "Net 1 Day" },
  { value: "week", label: "Net 7 Days" },
  { value: "fortnight", label: "Net 14 Days" },
  { value: "month", label: "Net 30 Days" },
];

let validationSchema = object({
  fromDetails: object({
    address: string().required("Address required."),
    city: string().required(),
    zipcode: string()
      .matches(/^[0-9]{5}$/, "Enter a valid zip code.")
      .required(),
    country: string().required(),
  }),

  toDetails: object({
    name: string().required(),
    email: string().email().required(),
    address: string().required(),
    city: string().required(),
    zipcode: string()
      .required()
      .matches(/^[0-9]{5}$/, "Enter a valid zip code."),
    country: string().required(),
    invoiceDate: date().required(),
    paymentTerms: string().required(),
    projectDescription: string().required(),
  }),

  itemsList: array().of(
    object({
      name: string().required(),
      quantity: number().required().min(1).max(99),
      price: number().required(),
    })
  ),
});

const initialValues = {
  fromDetails: {
    address: "",
    city: "",
    zipcode: "",
    country: "",
  },

  toDetails: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    country: "",
    invoiceDate: new Date(),
    paymentTerms: selectOptions[0].value,
    projectDescription: "",
  },
  itemsList: [],
};

const formDetails = { validationSchema, initialValues, selectOptions };
export default formDetails;
