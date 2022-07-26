import MoviesList from "./component/MoviesList";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import "./App.css";
import MovieDetail from "./component/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<MoviesList />}></Route>
              <Route path="/movie-detail" element={<MovieDetail />}></Route>
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
