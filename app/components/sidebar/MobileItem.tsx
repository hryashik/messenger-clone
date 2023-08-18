"use client";

import Link from "next/link";
import clsx from "clsx";

interface Props {
   href: string;
   icon: any;
   active?: boolean;
   onClick?: () => void;
}

const MobileItem = ({
   href,
   icon: Icon,
   active,
   onClick,
}: Props) => {
   const handleClick = () => {
      if (onClick) {
         return onClick();
      }
   };

   return (
      <Link
         onClick={handleClick}
         href={href}
         className={clsx(
            `
            group
            flex
            gap-x-3
            text-xl
            leading-6
            h-20
            font-semibold
            w-full
            items-center
            justify-center
            p-4
            text-gray-500
            hover:text-black
            hover:bg-gray-100  
         `,
            active && "bg-gray-100 text-black"
         )}
      >
         <Icon />
      </Link>
   );
};

export default MobileItem;
