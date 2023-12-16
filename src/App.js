import "./App.css";
import { Home } from "./pages";
import Router from "./routers/Router";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
