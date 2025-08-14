import { Role } from "@/constants/role";
import { adminRoutes } from "@/routes/adminRoutes";
import { userRoutes } from "@/routes/userRoutes";
import type { TRole } from "@/types";

export const roleBasedSidebarItems = (role : TRole)=>{
    switch (role) {
        case Role.admin:
        return [...adminRoutes];

        case Role.user:
        return [...userRoutes]

        default:
        return [];
    }
}