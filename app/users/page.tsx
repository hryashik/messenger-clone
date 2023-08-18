<<<<<<< HEAD
"use client";

import { signOut } from "next-auth/react";

export default function Users() {
   return (
      <div>
         <button onClick={() => signOut()}>SignOut</button>
      </div>
   );
}
=======
import EmptyState from "../components/EmptyState"

function Users() {
   return (
      <div className="hidden lg:block lg:pl-80 h-full">
         <EmptyState />
      </div>
   )
}

export default Users
>>>>>>> dev
