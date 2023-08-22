import Home from "../components/screens/home/Home";
import Masters from "../components/screens/masters/Masters";
import Price from "../components/screens/price/Price";

export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: false,
  },
  {
    path: "/masters",
    component: Masters,
    isAuth: false,
  },
  {
    path: "/price",
    component: Price,
    isAuth: false,
  },
];
