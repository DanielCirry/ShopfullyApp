import thunk from "redux-thunk";
import { flyersReducer } from "./flyers/reducer";
import { IFlyersState } from "./flyers/types";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

export interface IRootState {
  flyers: IFlyersState;
}

const appReducer = combineReducers({
  flyers: flyersReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<IRootState, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
