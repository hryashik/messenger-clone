import Image from "next/image";
import styles from "./app.module.scss";
import { AuthForm } from "./components/AuthForm/AuthForm";

export default function Home() {
   return (
      <div className={styles.main}>
         <div style={{ marginBottom: "10px" }}>
            <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
         </div>
         <AuthForm />
      </div>
   );
}
