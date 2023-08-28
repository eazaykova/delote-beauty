import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes.data";
import NotFound from "../components/screens/not-found/NotFound";

const Router = () => {
  return (
    /* <BrowserRouter>*/
    <HashRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
    /*</BrowserRouter>*/
  );
};

export default Router;
