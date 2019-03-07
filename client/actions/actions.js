import * as types from '../constants/actionTypes';

export const addInput = (text) => ({
    type: types.ADD_INPUT,
    payload: text
})
export const searchBars = () => ({
    type: types.SEARCH_BARS,
    payload: ''
})
export const getBars = () => ({
    type: types.GET_BARS,
    payload: ''
})
export const setBars = (data) => ({
    type: types.SET_BARS,
    payload: data
})