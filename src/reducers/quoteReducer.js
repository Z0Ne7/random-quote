import produce from 'immer';
import { ACTION } from '../constants/actionTypes';
import { API_URL } from '../constants/serviceTypes';

const initialState = {
  quotesData: {},
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_RANDOM_QUOTE:
      return produce(state, (draft) => {});
    case ACTION.GET_QUOTES:
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          state.quotesData = data.quotes;
          console.log(state.quotesData);
        });
      return state;
    default:
      return state;
  }
};

export default quoteReducer;
