import { getLocale } from "next-intl/server";
/* eslint-disable react-hooks/rules-of-hooks */
import { SidebarItems } from "@/types";

export interface SidebarConfig {
  sidebarNav: SidebarItems[];
}




export const sidebarConfig: SidebarConfig = {
  sidebarNav: [
    {
      title:"dashboard" ,
      href: `/dashboard`,
      icon: "home",
      items: [],
    },
   
    {
      title: "projects",
      href: "/projects",
      icon: "server",
      items: [],
    },
    {
      title: "workflows",
      href: "/workflows",
      icon: "workflow",
      items: [],
    },
   
  ],
};