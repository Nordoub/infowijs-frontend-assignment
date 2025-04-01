import { createBrowserRouter } from "react-router-dom";
import ArticleDetailPage from "./ArticleDetailPage";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":category/article/:id", element: <ArticleDetailPage /> },
    ],
  },
]);

export default router;
