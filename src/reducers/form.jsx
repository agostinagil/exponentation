import { WON, FAILED, RESET } from "../actions/form";

export const initialState = {
  won: false,
  failed: false,
  showForm: true,
  showNext: false,
  showMessage: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case WON:
      return {
        showForm: false,
        showNext: true,
        showMessage: true,
        won: true,
        failed: false,
      };

    case FAILED:
      return {
        ...state,
        showForm: false,
        showNext: true,
        showMessage: true,
        failed: true,
      };
    case RESET:
      return initialState;
  }
};
