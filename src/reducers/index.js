import { combineReducers } from "redux";
import allTransactionsReducer from "./allTransactionsReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  allTransactions: allTransactionsReducer,
  cards: cardsReducer
});
