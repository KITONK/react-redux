import {all} from "redux-saga/effects";
import { countWatcher } from "./cashSaga";
import { customerWatcher } from "./customerSaga";

export function* rootWatcher() {
    yield all([countWatcher(), customerWatcher()])
}