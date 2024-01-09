import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopicNews from "./routes/TopicNews.jsx";

const index = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news/:newsCategory",
    element: <TopicNews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={index} />
    </React.StrictMode>
  </React.StrictMode>
);
