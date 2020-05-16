import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import flyersReducer from "../reducers/flyers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      flyers: flyersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
