import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

export const signupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});
