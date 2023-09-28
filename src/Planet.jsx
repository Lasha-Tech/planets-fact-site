import { useParams } from "react-router-dom";
import { useState } from "react";
import jsonFile from "./data.json";

const Planet = ({ hamburger }) => {
  const { name } = useParams();
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  
  //Overview Click Function
  const handleClickOverview = () => {
    setOverview(true);
    setStructure(false);
    setSurface(false);
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
            
            {/* Main For Mobile  */}
            <div className="main" style={{display: hamburger? 'flex': 'none'}}>
               {overview? (
                <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.planet} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.overview.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.overview.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()}
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  
                </div>       
                ): structure? (
                  <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.internal} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.structure.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.structure.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()}
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  </div>    
                ): surface? (
                  <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.planet} alt={planets.name} />
                    <img className='image-surface' src={planets.images.geology} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.geology.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.geology.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()}
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  </div>    
                ): null}

              {/* Main Footer  */}
              <div className="footer-containers">
                <div className="planet-details">
                  {/* 1  */}
                    <p className="details-title">ROTATION TIME</p>
                    <p className="details-number">{planets.rotation}</p>
                  </div>
                  {/* 2  */}
                  <div className="planet-details">
                    <p className="details-title">REVOLUTION TIME</p>
                    <p className="details-number">{planets.revolution}</p>
                  </div>
                  {/* 3  */}
                  <div className="planet-details">
                    <p className="details-title">RADIUS</p>
                    <p className="details-number">{planets.radius}</p>
                  </div>
                  {/* 4  */}
                  <div className="planet-details">
                    <p className="details-title">AVERAGE TEMP.</p>
                    <p className="details-number">{planets.temperature}</p>
                  </div>
                </div>
            </div>


            {/* Main For Tablet, Desktop  */}
            <div className="main-clone">
               {overview? (
                <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.planet} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.overview.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.overview.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()}
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  
                </div>       
                ): structure? (
                  <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.internal} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.structure.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.structure.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()} 
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  </div>    
                ): surface? (
                  <div className="content">
                  {/* Image  */}
                  <div className="image">
                    <img className="image-planet" src={planets.images.planet} alt={planets.name} />
                    <img className='image-surface' src={planets.images.geology} alt={planets.name} />
                  </div>

                  <div className="planet-main">
                    {/* Planet Name  */}
                    <div className="planet-text">
                      <p className="planet-title">{planets.name}</p>
                      <p className="planet-review">{planets.geology.content}</p>
                      <p className="planet-source">Source : <a className="wikipedia" href={planets.geology.source}>Wikipedia</a>
                      <svg className='wikipedia-svg' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white"/>
                      </svg>
                      </p>
                    </div>

                    <div className="planet-filter">
                      {/* Overview  */}
                      <div className="filter" onClick={() => handleClickOverview()}
                      style={{ backgroundColor: overview ?  planets.color: '#070724'}}>
                        <p className="filter-number">01</p>
                        <p className="filter-text">Overview</p>
                      </div>

                      {/* Filter  */}
                      <div className="filter" onClick={() => handleClickStructure()}
                      style={{ backgroundColor: structure ?  planets.color: '#070724'}}>
                        <p className="filter-number">02</p>
                        <p className="filter-text">Internal Structure</p>
                      </div>

                      {/* Surface  */}
                      <div className="filter" onClick={() => handleClickSurface()}
                      style={{ backgroundColor: surface?  planets.color: '#070724'}}>
                        <p className="filter-number">03</p>
                        <p className="filter-text">Surface Geology</p>
                      </div>
                    </div>
                  </div>
                  </div>    
                ): null}

              {/* Main Footer  */}
              <div className="footer-containers">
                <div className="planet-details">
                  {/* 1  */}
                    <p className="details-title">ROTATION TIME</p>
                    <p className="details-number">{planets.rotation}</p>
                  </div>
                  {/* 2  */}
                  <div className="planet-details">
                    <p className="details-title">REVOLUTION TIME</p>
                    <p className="details-number">{planets.revolution}</p>
                  </div>
                  {/* 3  */}
                  <div className="planet-details">
                    <p className="details-title">RADIUS</p>
                    <p className="details-number">{planets.radius}</p>
                  </div>
                  {/* 4  */}
                  <div className="planet-details">
                    <p className="details-title">AVERAGE TEMP.</p>
                    <p className="details-number">{planets.temperature}</p>
                  </div>
                </div>
                </div>
            </div>     
          )
        }
      })}
    </div>
  );
};

export default Planet;
