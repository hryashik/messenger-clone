<<<<<<< HEAD
import { AuthContext } from "./context/AuthContext";
import { ToasterContext } from "./context/ToasterContext";
import "./globals.scss";
import type { Metadata } from "next";
=======
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToasterContext } from "./context/ToasterContext";
import { AuthContext } from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });
>>>>>>> dev

export const metadata: Metadata = {
   title: "Messenger Clone",
   description: "Messenger Clone",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
<<<<<<< HEAD
         <head>
            <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
         </head>
         <body>
            <AuthContext>
               <ToasterContext />
=======
         <body className={inter.className}>
            <AuthContext>
               <ToasterContext />
               <ActiveStatus />
>>>>>>> dev
               {children}
            </AuthContext>
         </body>
      </html>
   );
}
