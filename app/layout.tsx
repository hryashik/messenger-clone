import { ToasterContext } from "./context/ToasterContext";
import "./globals.scss";
import type { Metadata } from "next";

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
         <head>
            <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
         </head>
         <body>
            <ToasterContext />
            {children}
         </body>
      </html>
   );
}
