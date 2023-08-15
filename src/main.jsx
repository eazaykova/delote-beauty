import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import Router from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
