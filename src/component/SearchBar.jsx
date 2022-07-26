import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedMovie } from "../redux/movies/MoviesAction";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState([]);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    setSubmit(...submit, input);
    e.preventDefault();
    if (input) dispatch(fetchSearchedMovie(input));
  };

  return (
    <div>
      <div className="input-group mt-4 mb-4">
        <input
          type="text"
          value={input}
          className="form-control"
          placeholder="Search movies"
          aria-label="Search movies"
          aria-describedby="button-addon2"
          onChange={onChangeHandler}
        />
        <button
          className="btn btn-outline-secondary bg-indigo"
          // style={{ backgroundColor: "#7079e0" }}
          type="button"
          id="button-addon2"
          onClick={submitHandler}
        >
          <i
            className="fa fa-search"
            aria-hidden="true"
            style={{ color: "#fff" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
