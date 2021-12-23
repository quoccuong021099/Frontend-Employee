import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute } from "./common/AuthRoute";
import NotFound from "./common/NotFound";
import { PrivateRoute } from "./common/PrivateRoute";
import { LoginPage, RegisterPage } from "./containers/AuthPage";
import HomePage from "./containers/HomePage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const userInfo = useSelector((state) => state.authReducer.userLogin);
  console.log("userInfo", userInfo);
  return (
    <div>
      <Switch>
        <AuthRoute path="/login">
          <LoginPage />
        </AuthRoute>
        <AuthRoute path="/register">
          <RegisterPage />
        </AuthRoute>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
