import Home from "../components/screens/home/Home";
import Masters from "../components/screens/masters/Masters";

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
];
