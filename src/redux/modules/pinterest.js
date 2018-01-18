const LOAD = 'redux-example/pinterest/LOAD';
const LOAD_SUCCESS = 'redux-example/pinterest/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/pinterest/LOAD_FAIL';

const GET_ACCESS_TOKEN = 'redux-example/pinterest/GET_ACCESS_TOKEN';
const GET_ACCESS_TOKEN_SUCCESS = 'redux-example/pinterest/GET_ACCESS_TOKEN_SUCCESS';
const GET_ACCESS_TOKEN_FAIL = 'redux-example/pinterest/GET_ACCESS_TOKEN_FAIL';

const CREATE_BOARD = 'redux-example/pinterest/CREATE_BOARD';
const CREATE_BOARD_SUCCESS = 'redux-example/pinterest/CREATE_BOARD_SUCCESS ';
const CREATE_BOARD_FAIL = 'redux-example/pinterest/CREATE_BOARD_FAIL';

const UPLOAD_IMAGE_TO_BOARD = 'redux-example/pinterest/UPLOAD_IMAGE_TO_BOARD';
const UPLOAD_IMAGE_TO_BOARD_SUCCESS = 'redux-example/pinterest/UPLOAD_IMAGE_TO_BOARD_SUCCESS';
const UPLOAD_IMAGE_TO_BOARD_FAIL = 'redux-example/pinterest/UPLOAD_IMAGE_TO_BOARD_FAIL';

const initialState = {
  loaded: false,
  editing: {},
  saveError: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        loading: true
      };
    case GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        token: action.result,
        error: null
      };
    case GET_ACCESS_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        token: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    case CREATE_BOARD:
      return {
        ...state,
        loading: true
      };
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        board: action.result,
        error: null
      };
    case CREATE_BOARD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        board: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/widget/load/param1/param2') // params not used, just shown as demonstration
  };
}

export function getAccessToken(code) {
  return {
    types: [GET_ACCESS_TOKEN, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL],
    promise: (client) => client.post('/pinterest/accesstoken', {
      data: {
        grant_type: 'authorization_code',
        client_id: '4887843471106260088',
        client_secret: '324f7d647b326568d249168cef356d66eb2c984895467d096105fe325c88e6fd',
        code
      }
    })
  };
}

export function createBoard(accessToken, name, description) {
  return {
    types: [CREATE_BOARD, CREATE_BOARD_SUCCESS, CREATE_BOARD_FAIL],
    promise: (client) => client.post('/pinterest/createBoard', {
      data: {
        accessToken,
        name,
        description
      }
    })
  };
}

export function uploadImageToBoard(accessToken) {
  return {
    types: [UPLOAD_IMAGE_TO_BOARD, UPLOAD_IMAGE_TO_BOARD_SUCCESS, UPLOAD_IMAGE_TO_BOARD_FAIL],
    promise: (client) => client.post('/pinterest/uploadImageToBoard', {
      data: {
        accessToken,
        board: 'reviewskingdom/my-board',
        note: 'My first api pin',
      }
    })
  };
}
