import { Redirect, Route, Switch } from "react-router-dom";
import { LoginPage, RegisterPage } from "./containers/AuthPage";
import HomePage from "./containers/HomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isLogin = useSelector(
    (state) => state.authReducer.statusFlags.isLoginSuccess
  );
  console.log("isLogin", isLogin);

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
          {isLogin && <Redirect to="/" />}
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
