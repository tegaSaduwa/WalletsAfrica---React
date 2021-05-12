import { GET_CARDS, DELETE_CARD } from "../actions/types";
import { cards } from "../services/config";
import axios from "axios";

export const getCards = () => {
  return async (dispatch) => {
    axios
      .get(cards)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_CARDS,
          payload: res.data,
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        console.log(e);
      });
  };
};

export const deleteCard = (id) => {
  return async (dispatch) => {
    axios
      .delete(`cards/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETE_CARD,
          payload: id,
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        console.log(e);
      });
  };
};
