import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Planet from "./Planet";
import jsonFile from "./data.json";

function App() {
  const [hamburger, setHamburger] = useState(false);

  //Hamburger Click Event
  const handleClickHamburger = () => {
    if (!hamburger) {
      return;
    } else {
      setHamburger(!hamburger);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* header */}
        <div className="header">
          <p className="title">THE PLANETS</p>
          <svg
            onClick={() => handleClickHamburger()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
          >
            <g style={{ opacity: !hamburger ? "0.248746" : "1" }}>
              <rect width="24" height="3" fill="white" />
              <rect y="7" width="24" height="3" fill="white" />
              <rect y="14" width="24" height="3" fill="white" />
            </g>
          </svg>
        </div>


        {/* Menu  */}
        <div
          className="menu"
          style={{ display: !hamburger ? "block" : "none" }}
        >
          {jsonFile.map((planet) => {
            return (
              <Link to={"/data/" + planet.name} key={Math.random()}>
                <div
                  className="planets"
                  onClick={() => setHamburger(true)}
                >
                  <div className="left">
                    <div
                      style={{ backgroundColor: `${planet["menu-color"]}` }}
                      className="planet-size"
                    ></div>
                    <p className="planet-name">{planet.name}</p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <Routes>
          <Route
            path="/data/:name"
            element={<Planet hamburger={hamburger} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
