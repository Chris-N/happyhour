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
export const addBar = (data) => ({
    type: types.ADD_BAR,
    payload: data
})
export const toggleForm = () => ({
    type: types.SHOW_FORM,
    payload: ''
})
export const setName = (data) => ({
    type: types.SET_NAME,
    payload: data
})
export const setLocation = (data) => ({
    type: types.SET_LOCATION,
    payload: data
})