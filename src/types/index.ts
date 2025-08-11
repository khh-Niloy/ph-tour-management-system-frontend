// export enum Role {
//   SUPER_ADMIN = "SUPER_ADMIN",
//   ADMIN = "ADMIN",
//   USER = "USER",
//   GUIDE = "GUIDE",
// }

import type { ComponentType } from "react";

// export interface IRole {
//   role: ;
// }

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER"