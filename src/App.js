import { Home } from "./views/index";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
