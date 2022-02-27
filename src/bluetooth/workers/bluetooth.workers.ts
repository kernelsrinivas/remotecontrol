import { Action } from "../../common/types/common.types";

export function* bluetoothConnectSagaWorker(action: Action) {
    console.log("bluetoothConnectSagaWorker")
}


export function* bluetoothDisconnectSagaWorker(action: Action) {
    console.log("bluetoothDisconnectSagaWorker")
}


export function* bluetoothReadSagaWorker(action: Action) {
    console.log("bluetoothReadSagaWorker")
}


export function* bluetoothWriteSagaWorker(action: Action) {
    console.log("bluetoothWriteSagaWorker")
}