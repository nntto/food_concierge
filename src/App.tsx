import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Order from "./pages/Order";
import PrimarySearchAppBar from "./organisms/AppBar";
import Confirm from "./pages/Confirm";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/confirm",
    element: <Confirm />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
