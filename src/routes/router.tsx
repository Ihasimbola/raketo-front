import { Link, createBrowserRouter } from "react-router-dom";
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
          { index: true, element: <div>Index page</div>, handle: { crumb: () => "index" } },
          {
            path: "sokajy",
            element: <CategoryPage />,
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
    ]
  }
])