import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required().min(2).max(50),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(100),
});

export default registerSchema;

export type RegisterFieldValues = yup.InferType<typeof registerSchema>;
