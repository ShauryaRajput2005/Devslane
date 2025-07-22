
import * as Yup from "yup";

export const basicSchema = Yup.object().shape({
  user: Yup.string().required("Username is required").min(5),
  password: Yup.string().required("Password is required").min(5),
});
