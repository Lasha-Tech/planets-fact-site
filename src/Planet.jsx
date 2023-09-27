import { useParams } from "react-router-dom";
import { useState } from "react";
import jsonFile from "./data.json";

const Planet = ({ hamburger }) => {
  const { name } = useParams();
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

//   const [state, setState] = 

  //Overview Click Function
  const handleClickOverview = () => {
    if(!hamburger) {
        setOverview(false);
        setStructure(false);
        setSurface(false);
    } else {
    setOverview(true);
    setStructure(false);
    setSurface(false);
    }

  };
  //Structure Click Function
  const handleClickStructure = () => {
    setOverview(false);
    setStructure(true);
    setSurface(false);
  };
  // Surface Click Function
  const handleClickSurface = () => {
    setOverview(false);
    setStructure(false);
    setSurface(true);
  };

  return (
    <div className="Planet">
      {jsonFile.map((planets) => {
        if (planets["name"] == name) {
          return (
            <div className="wrapper">
            {/* header */}
            <div
              className="about-planet-header"
              style={{ display: hamburger ? "flex" : "none" }}
              key={Math.random()}
            >
              <div className="overview about-planet-title">
                <p
                  onClick={() => handleClickOverview()}
                  style={{ opacity: overview ? "1" : "0.5" }}
                >
                  OVERVIEW
                </p>
                <hr style={{ opacity: overview ? "1" : "0", backgroundColor: planets.color }} />
              </div>

              <div className="structure about-planet-title">
                <p
                  onClick={() => handleClickStructure()}
                  style={{ opacity: structure ? "1" : "0.5" }}
                >
                  STRUCTURE
                </p>
                <hr style={{ opacity: structure ? "1" : "0", backgroundColor: planets.color  }} />
              </div>

              <div className="surface about-planet-title">
                <p
                  onClick={() => handleClickSurface()}
                  style={{ opacity: surface ? "1" : "0.5" }}
                >
                  SURFACE
                </p>
                <hr style={{ opacity: surface ? "1" : "0", backgroundColor: planets.color  }} />
              </div>
            </div>
            
            {overview? (
                <div className="overview">
                    <img src={planets.images.planet} alt={planets.name} />
                </div>
            ): null}



            </div>     
          )
        }
      })}
    </div>
  );
};

export default Planet;
