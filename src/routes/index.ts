import { generateRoutes } from './../utils/generateRoutes';
import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { About } from "@/pages/About";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Verify from "@/pages/auth/Verify";
import {
  createBrowserRouter,
} from "react-router";
import { adminRoutes } from './adminRoutes';
import { userRoutes } from './userRoutes';

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
    Component: DashboardLayout,
    children: [...generateRoutes(adminRoutes)]
  },

  {
    path: "/user",
    Component: DashboardLayout,
    children: [...generateRoutes(userRoutes)]
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
]);
