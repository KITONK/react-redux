import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { asyncDecrementCreator, asyncIncrementCreator } from './store/cashReducer';
import {fetchAddManyCustomersAction} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
        <div style={{display: 'flex'}}>
          <button onClick={() => dispatch(asyncIncrementCreator())}>Пополнить счет</button>
          <button onClick={() => dispatch(asyncDecrementCreator())}>Снять со счета</button>
          <button onClick={() => dispatch(fetchAddManyCustomersAction())}>Получить клиента из базы</button>
        </div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
                customer.name
            )}
          </div>
          :
          <div style={{fontSize: '2rem', marginTop: '20px'}}>
            Клиенты отсутвуют
          </div>
        }
    </div>
  );
};

export default App;
