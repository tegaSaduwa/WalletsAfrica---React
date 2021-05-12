import {
     GET_TRANSACTIONS, DELETE_TRANSACTIONS
  } from "../actions/types";
  const initialState = {
    allTransactions: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_TRANSACTIONS:
        return {
          ...state,
          allTransactions: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  }
  