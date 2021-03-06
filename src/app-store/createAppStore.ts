import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

export default function createAppStore(){
    const sagaMiddleware = createSagaMiddleware()
    return {
        ...createStore(rootReducer, {}, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}