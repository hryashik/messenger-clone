"use client";
import { Button, Input, TextField } from "@mui/material";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./AuthForm.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
   const [variant, setVariant] = useState<Variant>("LOGIN");
   function onSubmitHandler(e: any) {
      e.preventDefault();
      console.log(e);
   }
   return (
      <div className={styles.main}>
         <form onSubmit={onSubmitHandler}>
            {variant === "REGISTER" && (
               <>
                  <h4>Username</h4>
                  <TextField
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
               autoFocus={true}
               type="email"
               size="small"
               className={styles.input}
               variant="outlined"
               id="2"
            />
            <h4>Password</h4>
            <TextField
               type="password"
               size="small"
               className={styles.input}
               id="3"
               variant="outlined"
            />
            <Button size="small" variant="contained" type="submit">
               {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
         </form>
         <div className={styles.continue}>
            <span>Or continue with</span>
         </div>
         <div className={styles.socialIcons}>
            <button type="button">
               <GitHubIcon fontSize="medium" />
            </button>
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
