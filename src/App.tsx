import GIS from "./components/GIS";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GIS center={[-73, 42]} zoom={10} />
    </div>
  );
}

export default App;
