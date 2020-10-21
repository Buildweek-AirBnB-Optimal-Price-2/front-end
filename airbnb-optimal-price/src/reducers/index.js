import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions";

let initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
      };
    case FETCH_DATA_SUCCESS:
      console.log("action payload", action.payload);
      return (initialState = action.payload);

    case FETCH_DATA_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default reducer;
