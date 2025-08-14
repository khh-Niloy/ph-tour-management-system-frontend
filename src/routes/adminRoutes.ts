import AddDivision from "@/pages/admin/AddDivision";
import AddTour from "@/pages/admin/AddTour";
import AddTourType from "@/pages/admin/AddTourType";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";
// import Analytics from "@/pages/Admin/Analytics";
// import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminRoutes: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Add Division",
        url: "/admin/add-division",
        component: AddDivision,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
    ],
  },
];