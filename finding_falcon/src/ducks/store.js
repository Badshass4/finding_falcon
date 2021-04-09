import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";

import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

export default store;
