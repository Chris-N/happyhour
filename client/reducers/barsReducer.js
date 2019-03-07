import * as types from '../constants/actionTypes';

const initialState = {
    location: '',
    totalBars: 0,
    list: [],
    deals: {}
}

const barsReducer = (state=initialState, action) => {
    switch(action.type){
        case types.ADD_INPUT: {
            // add to location from payload
        }
        case types.SEARCH_BARS: {
            // search bars from location field
        }
        case types.SET_BARS: {
            return {
                ...state,
                totalBars: action.payload.length,
                list: action.payload
            }
        }
        default:
            return state;
    }
};

export default barsReducer;