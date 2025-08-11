import AllUser from "@/pages/admin/AllUser";
import CreateTour from "@/pages/admin/CreateTour";

export const adminRoutes = [
    {
      title: "User",
      items: [
        {
          title: "All User",
          url: "/admin/all-user",
          component: AllUser
        },
      ],
    },
    {
      title: "Tour management",
      items: [
        {
          title: "Create Tour",
          url: "/admin/create-tour",
          component: CreateTour
        },
      ],
    },
]