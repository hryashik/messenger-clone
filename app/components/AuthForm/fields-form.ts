import { RegisterOptions } from "react-hook-form";

export type Inputs = {
   username?: string;
   email: "string";
   password: "string";
};

export const emailOptions: RegisterOptions<Inputs, "email"> = {
   required: true,
   minLength: {
      value: 6,
      message: "Email must contain at least 6 characters",
   },
   maxLength: {
      value: 30,
      message: "Email must contain no more than 30 characters",
   },
};

export const passwordOptions: RegisterOptions<Inputs, "password"> = {
   required: true,
   minLength: {
      value: 6,
      message: "Password must contain at least 6 characters",
   },
   maxLength: {
      value: 20,
      message: "Password must contain no more than 20 characters",
   },
};
export const usernameOptions: RegisterOptions<Inputs, "username"> = {
   minLength: {
      value: 3,
      message: "Username must contain at least 3 characters",
   },
   maxLength: {
      value: 20,
      message: "Username must contain no more than 20 characters",
   },
};
