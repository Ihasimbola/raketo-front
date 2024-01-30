import { Link, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import CategoryPage from "../pages/category";
import ElementPage from "../pages/element";
import TeknoPage from "../pages/tekno";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import { action as loginAction } from "../pages/login/index";
import { loader as categoryLoader } from "../pages/category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        children: [
          { index: true, element: <HomePage />, handle: { crumb: () => "index" } },
          {
            path: "sokajy",
            element: <CategoryPage />,
            loader: categoryLoader,
            handle: { crumb: () => "sokajy" }
          },
          {
            path: "tekno",
            element: <TeknoPage />,
            handle: { crumb: () => "tekno" }

          },
          {
            path: "singa",
            element: <ElementPage />,
            handle: { crumb: () => "singa" }

          }
        ]
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction
  }

])