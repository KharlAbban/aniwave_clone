import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AnimeFeed, AppLayout, ErrorPage, SearchPage } from "./pages";

const aniwaveCloneRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AnimeFeed />
      },
      {
        path: "/search/:searchTerm",
        element: <SearchPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/watch/:videoId"
      },
      {
        path: "/genre/:genreName"
      },
      {
        path: "/az-list/:letterName"
      },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={aniwaveCloneRouter} />
  )
}

export default App