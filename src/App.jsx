import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash});
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
        <div style={{display: 'flex'}}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
          <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button onClick={() => dispatch(fetchCustomers())}>Получить клиента из базы</button>
          <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
        </div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
              <div key={Date.now()} onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: '5px'}}>
                {customer.name}
              </div>
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
