import * as Yup from "yup";

export const basicSchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Invalid name") 
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});
