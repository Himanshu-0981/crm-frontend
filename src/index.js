import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SideMenuStateProvider } from "./contexts/SideMenuState";
import { AuthProvider } from "./contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SideMenuStateProvider>
      <App />
    </SideMenuStateProvider>
  </AuthProvider>
);

reportWebVitals();
