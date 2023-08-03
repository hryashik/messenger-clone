"use client";
import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./AuthForm.module.scss";
import { AuthSocialButton } from "../AuthSocialButton/AuthSocialButton";
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
            <h4>Email</h4>
            <TextField
               size="small"
               className={styles.input}
               variant="outlined"
               id="1"
            />
            <h4>Password</h4>
            <TextField
               size="small"
               className={styles.input}
               id="2"
               variant="outlined"
            />
            <Button size="small" variant="contained" type="submit">
               Sign in
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
      </div>
   );
}
