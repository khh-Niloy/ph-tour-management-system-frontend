import App from "@/App";
import { About } from "@/pages/About";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Verify from "@/pages/Verify";
import {
  createBrowserRouter,
} from "react-router";

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
