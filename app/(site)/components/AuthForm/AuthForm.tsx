"use client";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
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
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
   const session = useSession();
   const router = useRouter();
   const [variant, setVariant] = useState<Variant>("LOGIN");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (session?.status === "authenticated") {
         router.push("/users");
      }
   }, [session?.status, router]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = data => {
      if (variant === "REGISTER") {
         setIsLoading(true);
         axios
            .post("/api/register", data)
            .then(() => signIn("credentials", data))
            .catch(error => {
               if (error.response.data === "Credentials is taken") {
                  toast.error(error.response.data);
               } else {
                  toast.error("Something was wrong");
               }
            })
            .finally(() => setIsLoading(false));
      }
      if (variant === "LOGIN") {
         setIsLoading(true);
         signIn("credentials", {
            ...data,
            redirect: false,
         })
            .then(response => {
               if (response?.error) {
                  toast.error(response.error);
               }
               if (response?.ok && !response.error) {
                  toast.success("Logged in!");
                  router.push('/users')
               }
            })
            .finally(() => setIsLoading(false));
      }
   };
   const onSocialAction = (action: string) => {
      setIsLoading(true);
      signIn(action, { redirect: false })
         .then(response => {
            if (response?.error) {
               toast.error("Invalid credentials");
            }
            if (response?.ok && !response.error) {
               toast.error("Logged in!");
            }
         })
         .finally(() => setIsLoading(false));
   };
   return (
      <div className={styles.main}>
         <form onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
               <>
                  <h4>Name</h4>
                  <TextField
                     {...register("name", {
                        required: variant === "REGISTER" ? true : false,
                        ...usernameOptions,
                     })}
                     color={errors.name && "error"}
                     helperText={errors.name && errors.name.message}
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
            <button type="button" onClick={() => onSocialAction("github")}>
               <GitHubIcon fontSize="medium" color="inherit" />
            </button>
            <button type="button" onClick={() => onSocialAction("google")}>
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
