import Image from "next/image";
import styles from "./app.module.scss";
import { AuthForm } from "./components/AuthForm/AuthForm";

export default function Home() {
   return (
      <div className={styles.main}>
         <div>
            <Image
               src={"/images/logo.png"}
               priority
               alt="logo"
               width={60}
               height={60}
            />
         </div>
         <h1>Sign in to your account</h1>
         <AuthForm />
      </div>
   );
}
