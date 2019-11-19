import { GET_ALL_POST, DATA_LOADING } from '../actions/types';


const initialState = {
    loading: false,
    allPosts: []
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                allPosts: action.payload,
                loading: false
            };
        case DATA_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return  state ;
    }
}

export default postReducer;