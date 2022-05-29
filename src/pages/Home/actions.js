import { DogsTypes } from "./types";

export const getDogRequest = () => ({
  type: DogsTypes.GET_DOG_REQUEST,
});
export const getDogSuccess = (dog) => ({
  type: DogsTypes.GET_DOG_SUCCESS,
  payload: dog,
});

export const getDogFail = (error) => ({
  type: DogsTypes.GET_DOG_FAIL,
  payload: error,
});
