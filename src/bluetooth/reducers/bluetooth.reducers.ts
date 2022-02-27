import { Action } from "../../common/types/common.types";
import { BLE_REDUCER_ACTION } from "../constants/bluetooth.constants";

const initalState = {
    isLoading: false
}
export const bluetoothReducer = (state = initalState, action: Action): any => {
    if (action.type === BLE_REDUCER_ACTION.BLE_STATE_UPDATE_REDUCER_ACTION) {
        return {...state, ...action.payload}
    }
    return state;
}