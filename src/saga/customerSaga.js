import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_CUSTOMERS, addManyCustomersAction } from "../store/customerReducer";

const featchCustomersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchCustomerWorker() {
    const data = yield call(featchCustomersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addManyCustomersAction(json))
}

export function* customerWatcher() {
    yield takeEvery(FETCH_CUSTOMERS, fetchCustomerWorker)
}