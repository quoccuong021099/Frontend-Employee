import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
export const history = createBrowserHistory();

// bật redux dev tool
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(rootSaga);

export default store;
