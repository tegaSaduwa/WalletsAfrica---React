import {
    GET_CARDS, DELETE_CARD
 } from "../actions/types";
 const initialState = {
   cards: [],
 };
 
 export default function (state = initialState, action) {
   switch (action.type) {
     case GET_CARDS:
       return {
         ...state,
         cards: action.payload,
       };

       case DELETE_CARD:
        return {
          ...state,
          cards: state.cards.filter(
            (card) => card.id !== action.payload
          ),
        };
     default:
       return {
         ...state,
       };
   }
 }