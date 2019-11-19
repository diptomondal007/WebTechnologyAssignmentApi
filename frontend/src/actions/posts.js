import axios from 'axios';
import { GET_ALL_POST, DATA_LOADING } from './types';

export const getPosts = (type) => dispatch => {
    dispatch({
        type: DATA_LOADING
    });
      if(type) { axios
            .get('/posts/all')
            .then(res => {
                dispatch({
                    type : GET_ALL_POST,
                    payload : res.data
                });
            })
            .catch(err => {
                console.log(err)
            });
        }else{
            console.log("error");
        }

};