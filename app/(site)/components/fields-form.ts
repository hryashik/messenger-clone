import { RegisterOptions } from "react-hook-form";

export type FieldValues = {
   name?: string;
   email: string;
   password: string;
};

export const emailOptions: RegisterOptions<
   FieldValues,
   "email"
> = {
   required: true,
   pattern: {
      value: RegExp(
         "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$"
      ),
      message: "Email must contain @ and .",
   },
   minLength: {
      value: 6,
      message: "Email must contain at least 6 characters",
   },
   maxLength: {
      value: 30,
      message:
         "Email must contain no more than 30 characters",
   },
};

const passwordOptions: RegisterOptions<
   FieldValues,
   "password"
> = {
   required: true,
   minLength: {
      value: 6,
      message:
         "Password must contain at least 6 characters",
   },
   maxLength: {
      value: 20,
      message:
         "Password must contain no more than 20 characters",
   },
};
const usernameOptions: RegisterOptions<
   FieldValues,
   "name"
> = {
   minLength: {
      value: 3,
      message:
         "Username must contain at least 3 characters",
   },
   maxLength: {
      value: 20,
      message:
         "Username must contain no more than 20 characters",
   },
};

export const formFieldsOptions = {
   email: emailOptions,
   password: passwordOptions,
   name: usernameOptions,
};
