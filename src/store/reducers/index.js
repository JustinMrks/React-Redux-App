import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../actions";

const initialState = {
  woeid: 2430683,
  weather: [],
  isLoading: true,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "something", /// need to put something correct here, yikes -------------------
      };
    default:
      return state;
  }
};

export default reducer;
