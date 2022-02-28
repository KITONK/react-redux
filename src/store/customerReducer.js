const defaultState = {
    customers: [],
}

export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_MANY_CUSTOMERS:
        return {...state, customers: action.payload}
        
      default:
        return state;
    }
  }

  export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
  export const fetchAddManyCustomersAction = () => ({type: FETCH_CUSTOMERS})