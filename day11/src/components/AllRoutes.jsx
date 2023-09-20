import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import User from "../pages/User";
import UserPage from "../pages/UserPage";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users/:user_id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
