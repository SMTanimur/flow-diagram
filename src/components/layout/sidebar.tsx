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
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } 

  
  return (
    <div className="flex flex-col">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex gap-x-4 items-center">
          <div
            className={`cursor-pointer duration-500 border rounded-full px-4 py-2 ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => setOpen(!open)}
          >
            HQ
          </div>

          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
        </div>
        <div className="pt-6">
        {sidebarConfig.sidebarNav.map((item, index) => {
        const Icon = Icons[item.icon as keyof typeof Icons];

        return item.href ? (
          <Link
            aria-label={item.title}
            key={index}
            href={item.href}
            // disabled={me?.provider !== 'google'}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span
              className={cn(
                "group flex w-full items-center px-4 py-3 hover:bg-primary/20 hover:text-foreground ",
                pathname === item.href
                  ? "bg-primary/10 font-medium text-foreground border-l-4 border-primary"
                  : "text-muted-foreground",
                item.disabled && "pointer-events-none opacity-60"
              )}
            >
              <Icon
                className="mr-2 h-4 w-4 transition-transform duration-300 ease-linear group-hover:rotate-12"
                aria-hidden="true"
              />
              <span>{t(`${item.title}`)}</span>
            </span>
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