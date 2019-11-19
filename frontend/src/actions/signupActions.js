import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    console.log(userData);
    return axios.post('/user/register', userData);
  }
}