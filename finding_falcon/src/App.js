import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import store from "./ducks/store";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FindPage from "./pages/FindPage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/find">
              <FindPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
