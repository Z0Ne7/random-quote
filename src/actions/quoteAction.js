import { ACTION } from '../constants/actionTypes';

export const getRandomQuote = () => {
  return {
    type: ACTION.GET_RANDOM_QUOTE,
  };
};

export const getQuotes = () => {
  return {
    type: ACTION.GET_QUOTES,
  };
};

export const getQuote = () => {
  return {
    type: ACTION.GET_QUOTE,
  };
};
