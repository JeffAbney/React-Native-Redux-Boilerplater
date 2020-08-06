export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function logIn(user) {
  // if API call is successfull
  if (user) {
    return {
      type: LOGIN_SUCCESS,
      user: user,
    };
  }
  return {
    type: LOGIN_ERROR,
  };
}
