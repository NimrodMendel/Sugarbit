import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputPage from "./Components/InputPage";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/InputPage">
            <InputPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
