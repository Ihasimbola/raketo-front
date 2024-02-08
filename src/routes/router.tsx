import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import CategoryPage from "../pages/category";
import ElementPage from "../pages/element";
import TeknoPage from "../pages/tekno";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import { action as loginAction } from "../pages/login/index";
import { loader as categoryLoader } from "../pages/category";
import { action as categoryAction } from "../pages/category";
import Modal from "../components/modal";
import TopicContent from "../components/modal/topicContent";
import CategoryContent from "../components/modal/categoryContent";
import TecnoContent from "../components/modal/tecnoContent";
import { action as tecnoAction } from "../pages/tekno";
import { loader as tecnoLoader } from "../pages/tekno";
import { loader as modalLoader } from "../components/modal/tecnoContent";
import { action as topicAction } from "../pages/element"
import { loader as topicLoader } from "../pages/element"
import { loader as topicModalLoader } from "../components/modal/topicContent";
import { action as uploadAction } from "../pages/element/updateDone";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    handle: { crumb: () => "Home" },
    children: [
      {
        handle: { crumb: () => "Home" },
        children: [
          { index: true, element: <HomePage />, handle: { crumb: () => "index" } },
          {
            path: "sokajy",
            element: <CategoryPage />,
            loader: categoryLoader,
            action: categoryAction,
            handle: { crumb: () => "sokajy" },
            children: [
              {
                path: "create",
                element: <Modal><CategoryContent /></Modal>,
                handle: { crumb: () => "create", postUrl: "sokajy" }
              }
            ]
          },
          {
            path: "tekno",
            element: <TeknoPage />,
            action: tecnoAction,
            loader: tecnoLoader,
            handle: { crumb: () => "tekno" },
            children: [
              {
                path: "create",
                element: <Modal><TecnoContent /></Modal>,
                loader: modalLoader,
                handle: { crumb: () => "create", postUrl: "tekno" }

              }
            ]

          },
          {
            path: "singa",
            element: <ElementPage />,
            loader: topicLoader,
            action: topicAction,
            handle: { crumb: () => "singa" },
            children: [
              {
                path: "create",
                element: <Modal><TopicContent /></Modal>,
                loader: topicModalLoader,
                handle: { crumb: () => "create", postUrl: "singa" },
              }
            ]
          },
          {
            path: "singa/:id",
            action: uploadAction,
          }
        ]
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction,
  },
])