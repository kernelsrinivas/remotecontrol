import { takeLatest } from 'redux-saga/effects';
import { BLE_SAGA_ACTION } from '../constants/bluetooth.constants';
import { bluetoothConnectSagaWorker } from '../workers/bluetooth.workers';

export function* bluetoothConnectSagaWatcher() {
    console.log("bluetoothConnectSagaWatcher")
    yield takeLatest(BLE_SAGA_ACTION.BLE_CONNECT_SAGA_ACTION, bluetoothConnectSagaWorker);
}