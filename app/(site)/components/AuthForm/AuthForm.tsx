"use client";
import { Button, Input, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styles from "./AuthForm.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm, SubmitHandler } from "react-hook-form";
import {
   Inputs,
   emailOptions,
   passwordOptions,
   usernameOptions,
} from "./fields-form";
import Link from "next/link";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
   const [variant, setVariant] = useState<Variant>("LOGIN");
   const [isLoading, setIsLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = data => {
      if (variant === "REGISTER") {
         setIsLoading(true);
         axios.post("/api/register", {
            name: data.username,
            password: data.password,
            email: data.email,
         });
      }
      if (variant === "LOGIN") console.log(data);
   };
   return (
      <div className={styles.main}>
         <form onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
               <>
                  <h4>Username</h4>
                  <TextField
                     {...register("username", {
                        required: variant === "REGISTER" ? true : false,
                        ...usernameOptions,
                     })}
                     color={errors.username && "error"}
                     helperText={errors.username && errors.username.message}
                     autoFocus={true}
                     autoComplete="false"
                     type="text"
                     size="small"
                     className={styles.input}
                     variant="outlined"
                     id="1"
                  />
               </>
            )}
            <h4>Email</h4>
            <TextField
               {...register("email", emailOptions)}
               autoFocus={true}
               type="email"
               size="small"
               className={styles.input}
               variant="outlined"
               id="2"
               color={errors.email && "error"}
               helperText={errors.email && errors.email.message}
            />
            <h4>Password</h4>
            <TextField
               {...register("password", passwordOptions)}
               color={errors.password && "error"}
               helperText={errors.password && errors.password.message}
               type="password"
               size="small"
               className={styles.input}
               id="3"
               variant="outlined"
            />
            <Button
               size="small"
               variant="contained"
               type="submit"
               disabled={!!Object.keys(errors).length || isLoading}
            >
               {variant === "LOGIN" ? "LOGIN" : "Register"}
            </Button>
         </form>
         <div className={styles.continue}>
            <span>Or continue with</span>
         </div>
         <div className={styles.socialIcons}>
            <Link href={"/github"} type="button">
               <GitHubIcon fontSize="medium" color="inherit" />
            </Link>
            <button type="button">
               <GoogleIcon
                  fontSize="medium"
                  color="primary"
                  className={styles.socialIcons__item}
               />
            </button>
         </div>
         <div className={styles.changeForm}>
            <p>
               {variant === "LOGIN"
                  ? "New to Messenger?"
                  : "Already have an account?"}
            </p>
            <a
               onClick={() =>
                  setVariant(prev => (prev === "LOGIN" ? "REGISTER" : "LOGIN"))
               }
            >
               {variant === "LOGIN" ? "Create an account" : "Login"}
            </a>
         </div>
      </div>
   );
}
