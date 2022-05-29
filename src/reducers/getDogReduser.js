import { DogsTypes } from "../pages/Home/types";

const INITIAL_STATE = {
  dog: {},
  error: null,
};

const getDogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DogsTypes.GET_DOG_SUCCESS:
      return {
        ...state,
        dog: action.payload,
      };
    case DogsTypes.GET_DOG_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getDogReducer;
