import { LOGIN_SUCCESS } from '../actions';

const cloneObject = function returnCloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};

let newState = {
  user: {
    loggedIn: false,
    profile: {
      email: 'Guest@gmail.com',
      password: 'Passw0rdEncriptado',
      name: 'Guest',
      lastName: 'Guest'
    }
  },
};

export default function userReducers(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('user.js - verfied successfully', action);
      newState = action.user;
      newState.loggedIn = true;
      return newState;
    default:
      console.log('user.js - verfication failed');
      return state || newState;
  }
}
