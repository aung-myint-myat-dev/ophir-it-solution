import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { HOME_ROUTE } from "./home";
import { ABOUT_ROUTE } from "./about";
import { CLIENT_PROJECTS_ROUTES } from "./client-projects";
import { SERVICES_ROUTE } from "./services";
import { OUR_PRODUCTS_ROUTES } from "./our-products";
import { PRICING_ROUTE } from "./pricings";
import { CONTACT_ROUTE } from "./contact";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      HOME_ROUTE,
      ABOUT_ROUTE,
      CLIENT_PROJECTS_ROUTES,
      SERVICES_ROUTE,
      OUR_PRODUCTS_ROUTES,
      PRICING_ROUTE,
      CONTACT_ROUTE,
    ]
  }
])