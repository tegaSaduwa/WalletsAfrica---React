import {
  GET_TRANSACTIONS
  } from "../actions/types";
  import { transactions } from "../services/config";
  import axios from "axios";


  export const getTransactions = () => {
    return async (dispatch) => {
      axios.get(transactions)
        .then((res) =>
        {console.log(res.data)
          dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data,
          })}
        )
        .catch((e) => {
          if (axios.isCancel(e)) {
            return;
          }
         console.log(e)
        });
    };
  };
  
