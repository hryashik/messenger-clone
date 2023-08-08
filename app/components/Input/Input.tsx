"use client";

import {
   FieldValues,
   formFieldsOptions,
} from "@/app/(site)/options/fields-form";
import clsx from "clsx";
import {
   FieldErrors,
   UseFormRegister,
} from "react-hook-form";

interface InputProps {
   label: string;
   id: "email" | "password" | "name";
   type?: string;
   required?: boolean;
   register: UseFormRegister<FieldValues>;
   errors: FieldErrors<FieldValues>;
   disabled?: boolean;
}

export function Input({
   label,
   id,
   type,
   required,
   register,
   errors,
   disabled,
}: InputProps) {
   return (
      <div>
         <label
            htmlFor={id}
            className="block text-sm font-medium loading-6 text-gray-900"
         >
            {label}
         </label>
         <div className="mt-2">
            <input
               id={id}
               type="text"
               autoComplete={id}
               disabled={disabled}
               //@ts-ignore
               {...register(id, formFieldsOptions[id])}
               className={clsx(
                  `
                  form-input
                  block 
                  w-full 
                  rounded-md 
                  border-0 
                  py-1.5 
                  text-gray-900 
                  shadow-sm 
                  ring-1 
                  ring-inset 
                  ring-gray-300 
                  placeholder:text-gray-400 
                  focus:ring-2 
                  focus:ring-inset 
                  focus:ring-sky-600 
                  sm:text-sm 
                  sm:leading-6`,
                  errors[id]?.message &&
                     "focus:ring-rose-600",
                  disabled && "opacity-50 cursor-default"
               )}
            />
            <p className="text-rose-600 text-sm mt-1">
               {errors[id]?.message}
            </p>
         </div>
      </div>
   );
}
