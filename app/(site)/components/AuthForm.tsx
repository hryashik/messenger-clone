"use client";

import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input/Input";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldValues } from "../options/fields-form";
import { AuthSocialButton } from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
   const [variant, setVariant] = useState<Variant>("LOGIN");
   const [isLoading, setIsLoading] = useState(false);

   const toggleVariant = useCallback(() => {
      if (variant === "LOGIN") {
         setVariant("REGISTER");
      } else {
         setVariant("LOGIN");
      }
   }, [variant]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>();

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);
      if (variant === "REGISTER") {
         axios
            .post("/api/register", data)
            .then(() => toast.success("Logged in!"))
            .catch(() => toast.error("Something wrong"))
            .finally(() => setIsLoading(false));
      }
      if (variant === "LOGIN") {
         // NextAuth SIgnin
      }
   };

   const socialAction = (action: string) => {
      setIsLoading(true);

      // Next Auth social signin
   };
   return (
      <div
         className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
         "
      >
         <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="space-y-6"
            >
               {variant === "REGISTER" && (
                  <Input
                     id="name"
                     label="Name"
                     errors={errors}
                     register={register}
                     disabled={isLoading}
                  />
               )}
               <Input
                  id="email"
                  label="Email"
                  type="email"
                  errors={errors}
                  register={register}
                  disabled={isLoading}
                  required={true}
               />
               <Input
                  id="password"
                  label="Password"
                  type="password"
                  errors={errors}
                  register={register}
                  disabled={isLoading}
               />
               <div>
                  <Button
                     disabled={isLoading}
                     fullWidth
                     type="submit"
                  >
                     {variant === "LOGIN"
                        ? "Sign in"
                        : "Register"}
                  </Button>
               </div>
            </form>
            <div className="mt-6">
               <div className="relative">
                  <div
                     className="
                     absolute
                     inset-0
                     flex
                     items-center
                  "
                  >
                     <div
                        className="
                           w-full 
                           border-t 
                         border-gray-300
                         "
                     />
                  </div>
                  <div
                     className="
                           relative 
                           flex 
                           justify-center 
                           text-sm
                     "
                  >
                     <span className="bg-white px-2 text-gray-500">
                        Or continue with
                     </span>
                  </div>
               </div>
               <div className="mt-6 flex gap-2">
                  <AuthSocialButton
                     icon={BsGithub}
                     onClick={() => socialAction("github")}
                  />
                  <AuthSocialButton
                     icon={BsGoogle}
                     onClick={() => socialAction("google")}
                  />
               </div>
            </div>
            <div
               className="
               flex
               gap-2
               justify-center
               text-sm
               mt-6
               px-2
               text-gray-500
            "
            >
               <div>
                  {variant === "LOGIN"
                     ? "New to Messanger?"
                     : "Already have and account?"}
               </div>
               <div
                  onClick={toggleVariant}
                  className="underline cursor-pointer"
               >
                  {variant === "LOGIN"
                     ? "Create and account"
                     : "Login"}
               </div>
            </div>
         </div>
      </div>
   );
}
