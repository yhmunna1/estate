import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Roots from "./layouts/Roots";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/properties.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/properties/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: async ({ params }) => {
          const response = await fetch("/properties.json");
          const properties = await response.json();
          const property = properties.find(
            (property) => property.id === Number(params.id)
          );
          if (!property) {
            throw new Error("Property not found");
          }

          return property;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
