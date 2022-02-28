import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {countWatcher} from "../saga/cashSaga";
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers ({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)