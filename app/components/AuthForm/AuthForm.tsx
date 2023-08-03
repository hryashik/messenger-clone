"use client";

import { Button, Input } from "@mui/material";
import { useState } from "react";
import styles from "./AuthForm.module.scss";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
   const [variant, setVariant] = useState<Variant>("LOGIN");
   return (
      <div className={styles.main}>
         <form action="">
            <Input placeholder="email" />
            <Button variant="contained">{variant}</Button>
         </form>
      </div>
   );
}
