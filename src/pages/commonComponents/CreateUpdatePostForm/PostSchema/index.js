import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Enter more than 5 characters")
    .required("Enter title"),
  body: Yup.string()
    .min(15, "Enter more than 20 characters")
    .required("Enter body"),
});
