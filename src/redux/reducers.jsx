import {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  START_EDIT_ITEM,
  CANCEL_EDIT_ITEM,
  SET_FILTER
} from '../actions';

const initialState = {
  items: [],
  editItem: null,
  filterText: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
        editItem: null
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        editItem: state.editItem && state.editItem.id === action.payload ? null : state.editItem
      };
    case START_EDIT_ITEM:
      return { ...state, editItem: action.payload };
    case CANCEL_EDIT_ITEM:
      return { ...state, editItem: null };
    case SET_FILTER:
      return { ...state, filterText: action.payload };
    default:
      return state;
  }
}