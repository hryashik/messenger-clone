"use client";

import { SessionProvider } from "next-auth/react";

interface AuthContextProps {
<<<<<<< HEAD
   children: React.ReactNode;
}

export function AuthContext({ children }: AuthContextProps) {
   return <SessionProvider>{children}</SessionProvider>;
}
=======
   children: React.ReactNode
}

export function AuthContext({children}: AuthContextProps) {
   return (
      <SessionProvider>{children}</SessionProvider>
   )
}
>>>>>>> dev
