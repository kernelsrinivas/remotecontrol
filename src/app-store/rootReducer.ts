import { combineReducers } from "redux";
import { bluetoothReducer } from "../bluetooth/reducers/bluetooth.reducers";

const rootReducer = combineReducers({
    bluetoothReducer: bluetoothReducer
});

export default rootReducer;