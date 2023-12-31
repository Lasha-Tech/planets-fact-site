import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import Planet from "./Planet";
import jsonFile from "./data.json";


function App() {
  const [hamburger, setHamburger] = useState(true);

  //Hamburger Click Event
  const handleClickHamburger = () => {
    if (!hamburger) {
      return;
    } else {
      setHamburger(!hamburger);
    }
  };
  //Planet Title Mouse Events
  const handleMouseoverPlanetTitle = (e, color) => {
    e.target.style.borderTopColor = `${color}`
 }
  const handleMouseoutPlanetTitle = (e) => {
    e.target.style.borderTopColor = '#070724'
  }

  return (
    <Router>
      <div className="App">
        {/* header */}
        <div className="header">
          <p className="title">THE PLANETS</p>
          {/* Hamburger  */}
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
          {/* Planet Title */}
          <div className="planet-headers">
            {jsonFile.map((planet) => {
            return (
              <Link to={"/data/" + planet.name} key={Math.random()}>
                <p onMouseOver={(e) => handleMouseoverPlanetTitle(e, planet.color)}
                onMouseOut={(e) => handleMouseoutPlanetTitle(e)}
                style={{borderTopColor: '#070724'}}
                className="planet-link">
                  {planet.name}
                </p>
              </Link>
            )
            })}
          </div>
          
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
                      style={{ backgroundColor: planet['menu-color'] }}
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
          <Route path="/" element={<Navigate to='/data/Mercury'/>}/>
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
