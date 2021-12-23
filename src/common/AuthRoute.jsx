import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export function AuthRoute(props) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  if (isLoggedIn) return <Redirect to="/" />;

  return <Route {...props} />;
}
