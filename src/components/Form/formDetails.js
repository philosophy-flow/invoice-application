import { object, string, number, date, array } from "yup";

const selectOptions = [
  { value: 1, label: "Net 1 Day" },
  { value: 7, label: "Net 7 Days" },
  { value: 14, label: "Net 14 Days" },
  { value: 30, label: "Net 30 Days" },
];

let validationSchema = object({
  createdAt: date().required("can't be empty"),
  description: string().required("can't be empty"),
  paymentTerms: number().required("can't be empty"),
  clientName: string().required("can't be empty"),
  clientEmail: string().email("enter a valid email").required("can't be empty"),
  senderAddress: object({
    street: string().required("can't be empty"),
    city: string().required("can't be empty"),
    zipcode: string()
      .matches(/^[0-9]{5}$/, "invalid")
      .required("invalid"),
    country: string().required("can't be empty"),
  }),
  clientAddress: object({
    street: string().required("can't be empty"),
    city: string().required("can't be empty"),
    zipcode: string()
      .matches(/^[0-9]{5}$/, "invalid")
      .required("invalid"),
    country: string().required("can't be empty"),
  }),
  items: array().of(
    object({
      name: string().required("can't be empty"),
      quantity: number().required("can't be empty").min(1).max(99),
      price: number().required("can't be empty"),
    })
  ),
  total: number().required("can't be empty"),
});

const initialValues = {
  createdAt: new Date(),
  description: "",
  paymentTerms: 30,
  clientName: "",
  clientEmail: "",
  senderAddress: {
    street: "",
    city: "",
    zipcode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    zipcode: "",
    country: "",
  },
  items: [],
  total: 0,
};

const formDetails = { validationSchema, initialValues, selectOptions };
export default formDetails;
