import logo from "./logo.svg";
import "./App.css";
import UseMemo from "./components/hooks/useMemo/UseMemo";
import UseReducer from "./components/hooks/useReducer/UseReducer";

function App() {
  return (
    <div className="App">
      {/* <UseMemo /> */}
      <UseReducer />
    </div>
  );
}

export default App;
