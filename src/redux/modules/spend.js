const LOAD_LIST = 'redux-example/spend/LOAD_LIST';
const LOAD_LIST_SUCCESS = 'redux-example/spend/LOAD_LIST_SUCCESS';
const LOAD_LIST_FAIL = 'redux-example/spend/LOAD_LIST_FAIL';
const ADD = 'redux-example/spend/ADD';
const ADD_SUCCESS = 'redux-example/spend/ADD_SUCCESS';
const ADD_FAIL = 'redux-example/spend/ADD_FAIL';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        adding: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        adding: false,
        spend: action.result.spend
      };
    case ADD_FAIL:
      return {
        ...state,
        adding: false,
        error: action.error
      };
    case LOAD_LIST:
      return {
        ...state,
        loading: true
      };
    case LOAD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        spends: action.result.spends
      };
    case LOAD_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const addSpend = data => ({
  types: [ADD, ADD_SUCCESS, ADD_FAIL],
  promise: async client => {
    try {
      const result = await client.post('/spend/add', data);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
});

export const loadList = data => ({
  types: [LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAIL],
  promise: async client => {
    try {
      const result = await client.get('/spend/loadList', { params: data });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
});
