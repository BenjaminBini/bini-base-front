import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { configureBackend, queryClient } from "./backend";
import router from "./router";

configureBackend();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<div>Loading</div>} />
    </QueryClientProvider>
  </React.StrictMode>
);
