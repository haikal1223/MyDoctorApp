import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Muhammad Haikal',
  address: 'Tangerang',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Haikal',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
