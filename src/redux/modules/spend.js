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
