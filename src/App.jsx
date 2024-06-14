import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Post from "./pages/Post";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
