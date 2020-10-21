import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => (dispatch) => {
  console.log("firing");
  dispatch({ type: FETCH_DATA_START });

  axios
    .get(`https://5f3fba8744212d0016fed1c4.mockapi.io/listings`)
    .then((res) => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err,
      });
    });
};
