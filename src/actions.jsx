export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const START_EDIT_ITEM = 'START_EDIT_ITEM';
export const CANCEL_EDIT_ITEM = 'CANCEL_EDIT_ITEM';
export const SET_FILTER = 'SET_FILTER';

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const updateItem = (item) => ({ type: UPDATE_ITEM, payload: item });
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
export const startEditItem = (item) => ({ type: START_EDIT_ITEM, payload: item });
export const cancelEditItem = () => ({ type: CANCEL_EDIT_ITEM });
export function setFilter(text) {
  return { type: SET_FILTER, payload: text };
}