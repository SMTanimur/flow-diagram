"use client"
import { sidebarConfig } from '@/configs/sidebar';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'
import { Icons } from '../ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Sidebar = () => {

  const t = useTranslations("Sidebar");
  const [open, setOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  console.log(pathname,'dfs')
  const parts = pathname.split('/');
const path = parts[parts.length ? parts.length - 1 : 0];
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } 

  
  return (
    <div className="flex flex-col bg-[#edf0f2] items-center">
      <div
        className={` ${
          open ? "w-72 p-5" : "w-20 p-3 "
        }  h-screen   pt-8 relative duration-300 `}
      >
        <div className="flex gap-x-4 items-center w-full">
          <div
            className={`cursor-pointer duration-500 border rounded-full px-4 py-2 ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => setOpen(!open)}
          >
            RF
          </div>

          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
        </div>
        <div className="pt-6 w-full ">
        {sidebarConfig.sidebarNav.map((item, index) => {
        const Icon = Icons[item.icon as keyof typeof Icons];
    
        const isPath = item.href?.includes(path);
        return item.href ? (
          <Link
            aria-label={item.title}
            key={index}
            href={item.href}
            // disabled={me?.provider !== 'google'}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <div
              className={cn(
                "group flex w-full items-center px-4 py-3  ",
                isPath && open
                  ? "bg-white font-medium text-foreground border-l-4 border-rose-500 rounded-lg"
                  : "text-muted-foreground",
                item.disabled && "pointer-events-none opacity-60"
              )}
            >
              
              <div>
              <Icon
              size={25}
                className="mr-2  transition-transform duration-300 ease-linear group-hover:rotate-12 text-black"
                aria-hidden="true"
              />
              <span className='sr-only'>
                {t(`${item.title}`)}
              </span>
              </div>
              <span className={cn(open ? "" : "hidden")}>{t(`${item.title}`)}</span>
            </div>
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        );
      })}
        </div>
      </div>
      <div
        className={cn("flex justify-center items-center w-full", {
          hidden: !open,
        })}
      >
      
      </div>      
    </div>
  )
}

export default Sidebar