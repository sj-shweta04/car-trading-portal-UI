import {
  createBrowserRouter
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AboutUs from "./Components/AboutPage/AboutUs";
import Home from "./Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        errorElement: <ErrorPage />
      }

    ],
  },
]);