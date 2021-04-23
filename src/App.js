import "./App.css";
import Home from "./components/Home.js";
import Appbar from "./components/Appbar";
import Snowflakes from "./components/SnowFlakes";
function App() {
  return (
    <>
      <div className="style">
        <Snowflakes>
          <Appbar />
          <Home />
        </Snowflakes>
      </div>
    </>
  );
}

export default App;
