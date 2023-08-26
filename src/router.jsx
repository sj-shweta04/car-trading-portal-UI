import {
  createBrowserRouter
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AboutUs from "./Components/AboutPage/AboutUs";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import Cars from "./Components/ViewCars/Cars";
import SearchByBrand from "./Components/SearchBy/SearchByBrand";
import SearchByCity from "./Components/SearchBy/SearchByCity";

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
      },
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <ErrorPage />
      },
      {
        path:"/cars",
        element:<Cars/>,
        errorElement: <ErrorPage />
      },
      {
        path:"/cars/city/:cityName",
        element:<SearchByCity/>,
        errorElement: <ErrorPage />
      },
      {
        path:"/cars/brand/:brandName",
        element:<SearchByBrand/>,
        errorElement: <ErrorPage />
      }
    ],
  },
]);