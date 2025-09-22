import Bookings from "@/pages/user/Bookings";
import type { ISidebarItem } from "@/types";

export const userRoutes: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "All User",
        url: "/user/all-user",
        component: Bookings,
      },
    ],
  },
];