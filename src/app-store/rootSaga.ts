import { all, spawn } from "redux-saga/effects";
import { bluetoothConnectSagaWatcher } from "../bluetooth/watchers/bluetooth.watchers";

export function* rootSaga(){
    yield all([
        spawn(bluetoothConnectSagaWatcher)
    ])
}