const defaultState = {
    cash: 0,
  }

export const ADD_CASH = "ADD_CASH"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const GET_CASH = "GET_CASH"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"
  
export const cashReducer = (state = defaultState, action) => {
      switch(action.type) {
        case ADD_CASH:
          return {...state, cash: state.cash + 1}
  
        case GET_CASH:
          return {...state, cash: state.cash - 1}
  
        default:
          return state;
      }
  }

export const incrementCreator = () => ({type: ADD_CASH})
export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const decrementCreator = () => ({type: GET_CASH})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})