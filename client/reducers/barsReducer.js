import * as types from '../constants/actionTypes';

const initialState = {
    location: '',
    totalBars: 0,
    formHidden: false,
    formName: '',
    formLocation: '',
    list: [],
    deals: {}
}

const barsReducer = (state=initialState, action) => {
    switch(action.type){
        case types.ADD_INPUT: {
            return {
                ...state,
                location: action.payload
            }
        }
        case types.ADD_BAR: {
            const bar = {name: state.formName, location: state.formLocation};
            const newList = new Array(state.list);
            console.log(newList);
            newList[0].push(bar);
            console.log(bar);
            state.formName = '';
            state.formLocation = '';


            return {
                ...state,
                formName: '',
                formLocation: '',
                formHidden: !action.payload,
                list: newList[0]
            }
        }
        case types.SHOW_FORM: {
            return {
                ...state,
                formHidden: !state.formHidden
            }
        }
        case types.SEARCH_BARS: {
            // search bars from location field
        }
        case types.SET_NAME: {
            console.log(action.payload);
            return {...state, formName: action.payload}
        }
        case types.SET_LOCATION: {
            return {...state, formLocation: action.payload}
        }
        case types.SET_BARS: {
            const temp = [];
            const data = action.payload;
            for(let key in data){
                let item = {};
                item.name = data[key].name;
                item.location = data[key].location;
                temp.push(item);
            }

            return {
                ...state,
                totalBars: action.payload.length,
                list: temp
            }
        }
        default:
            return state;
    }
};

export default barsReducer;