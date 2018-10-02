import { SET_CURRENCIES } from "../actions";

const INITIAL_STATE = {
  currencies: {}
};

export const currenciesReducer = (
  state = INITIAL_STATE,
  { type, ...action }
) => {
  switch (type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.currencies };
    default:
      return state;
  }
};
