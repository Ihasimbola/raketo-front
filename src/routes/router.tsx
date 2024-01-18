import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import CategoryPage from "../pages/category";
import ElementPage from "../pages/element";
import TeknoPage from "../pages/tekno";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        children: [
          { index: true, element: <div>Index page</div> },
          {
            path: "sokajy",
            element: <CategoryPage />
          },
          {
            path: "tekno",
            element: <TeknoPage />
          },
          {
            path: "singa",
            element: <ElementPage />
          }
        ]
      }
    ]
  }
])