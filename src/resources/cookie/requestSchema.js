import { object, string, number } from "yup";

const cookieSchema = object({
  username: number().integer().min(1000000).max(9999999).required(),
  password: string().required(),
});

export default cookieSchema;
