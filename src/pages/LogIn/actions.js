import { LogInTypes } from "./types";

export const logInSuccess = (user) => ({
  type: LogInTypes.LOGIN_SUCCESS,
  payload: user,
});

export const logOutSuccess = () => ({
  type: LogInTypes.LOGOUT_SUCCESS,
});
