import {
  SET_LOADING_TRUE,
  GET_MOVIES_LIST,
  SET_ERROR_UPON_FAILURE,
  MOVIE_DETAIL_DATA,
} from "./MoviesTypes";

const initialState = {
  loading: false,
  movies: [],
  error: "",
  detailData: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_LIST:
      return {
        loading: false,
        movies: action.payload,
        error: "",
      };
    case SET_ERROR_UPON_FAILURE:
      return {
        loading: false,
        movies: [],
        error: action.payload,
      };
    case MOVIE_DETAIL_DATA:
      return {
        ...state,
        detailData: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
