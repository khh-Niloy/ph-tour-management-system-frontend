import { generateRoutes } from '../utils/generateRoutes';
import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { About } from "@/pages/About";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Verify from "@/pages/auth/Verify";
import {
  createBrowserRouter,
  Navigate,
} from "react-router";
import { adminRoutes } from './adminRoutes';
import { userRoutes } from './userRoutes';
import { roleBasedCompo } from '@/middleware/roleBasedCompo';
import { Role } from '@/constants/role';
import type { TRole } from '@/types';
import Unauthorized from '@/pages/Unauthorized';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: 'about',
        Component: About
      }
    ]
  },

  {
    path: "/admin",
    Component: roleBasedCompo(DashboardLayout, Role.admin as TRole),
    children: [
      {index: true, element: <Navigate to="/admin/analytics"/>},
      ...generateRoutes(adminRoutes)
    ]
  },

  {
    path: "/user",
    Component: roleBasedCompo(DashboardLayout, Role.user as TRole),
    children: [
      {index: true, element: <Navigate to="/user/bookings"/>},
      ...generateRoutes(userRoutes)]
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
]);
