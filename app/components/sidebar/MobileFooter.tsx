"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";
import { useState } from "react";

export default function MobileFooter({ currentUser }: { currentUser: User }) {
   const routes = useRoutes();
   const { isOpen } = useConversation();
   const [modalActive, setModalActive] = useState(false);
   if (isOpen) {
      return null;
   }
   return (
      <div
         className="
         fixed
         justify-between
         w-full
         bottom-0
         z-40
         flex
         items-center
         bg-white
         border-t-[1px]
         lg:hidden
      "
      >
         <SettingsModal
            currentUser={currentUser}
            isOpen={modalActive}
            onClose={() => setModalActive(false)}
         />
         {routes.map(route => (
            <MobileItem
               key={route.href}
               href={route.href}
               active={route.active}
               icon={route.icon}
               onClick={
                  route.label === "Settings"
                     ? () => setModalActive(true)
                     : route.onClick
               }
            />
         ))}
      </div>
   );
}
