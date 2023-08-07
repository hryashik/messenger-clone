"use client";

import { signOut } from "next-auth/react";

export default function Users() {
   return (
      <div>
         <button onClick={() => signOut()}>SignOut</button>
      </div>
   );
}
