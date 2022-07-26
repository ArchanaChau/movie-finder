import { combineReducers } from "redux";

import movieReducer from "./movies/MoviesReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;
