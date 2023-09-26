import { useState } from 'react'

function App() {
  const [hamburger, setHamburger] = useState(false)
  const [overview, setOverview] = useState(true)
  const [structure, setStructure] = useState(false)
  const [surface, setSurface] = useState(false)
  //Planet States
  const [mercury, setMercury] = useState(false);
  const [venus, setVenus] = useState(false);
  const [earth, setEarth] = useState(false);
  const [mars, setMars] = useState(false);
  const [Jupiter, setJupiter] = useState(false);
  const [saturn, setSaturn] = useState(false);
  const [uranus, setUranus] = useState(false);
  const [neptune, setNeptune] = useState(false);

  //Events
  //Hamburger Click Event
  const handleClickHamburger = () => {
    setHamburger(!hamburger)
    setOverview(true)
    setStructure(false)
    setSurface(false)
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(false)
    setJupiter(false)
    setSaturn(false)
    setUranus(false)
    setNeptune(false)
  }
  //Header Click Events
  const handleClickOverview = () => {
    setOverview(true)
    setStructure(false)
    setSurface(false)
  }
  const handleClickStructure = () => {
    setOverview(false)
    setStructure(true)
    setSurface(false)
  }
  const handleClickSurface = () => {
    setOverview(false)
    setStructure(false)
    setSurface(true)
  }


  return (
    <div className='App'>
      {/* header */}
      <div className='header'>
        <p className='title'>THE PLANETS</p>
        <svg onClick={() => handleClickHamburger()} xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
          <g style={{opacity: !hamburger? "0.248746": '1'}}>
            <rect width="24" height="3" fill="white"/>
            <rect y="7" width="24" height="3" fill="white"/>
            <rect y="14" width="24" height="3" fill="white"/>
          </g>
        </svg>
      </div>

        {/* Menu  */}
      <div className='menu' style={{display: !hamburger? 'block': 'none'}}>
        {/* Mercury  */}
        <div className='planets' onClick={() => {setHamburger(true); setMercury(true)}}>
          <div className='left'>
            <div className='mercury-color planet-size'></div>
            <p className='planet-name'>MERCURY</p>
          </div>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Venus  */}
        <div className='planets' onClick={() => {setHamburger(true); setVenus(true)}}>
          <div className='left'>
            <div className='venus-color planet-size'></div>
            <p className='planet-name'>VENUS</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Earth  */}
        <div className='planets' onClick={() => {setHamburger(true); setEarth(true)}}>
          <div className='left'>
            <div className='earth-color planet-size'></div>
            <p className='planet-name'>EARTH</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Mars  */}
        <div className='planets' onClick={() => {setHamburger(true); setMars(true)}}>
          <div className='left'>
            <div className='mars-color planet-size'></div>
            <p className='planet-name'>MARS</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Jupiter  */}
        <div className='planets' onClick={() => {setHamburger(true); setJupiter(true)}}>
          <div className='left'>
            <div className='jupiter-color planet-size'></div>
            <p className='planet-name'>JUPITER</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Saturn  */}
        <div className='planets' onClick={() => {setHamburger(true); setSaturn(true)}}>
          <div className='left'>
            <div className='saturn-color planet-size'></div>
            <p className='planet-name'>SATURN</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Uranus  */}
        <div className='planets' onClick={() => {setHamburger(true); setUranus(true)}}>
          <div className='left'>
            <div className='uranus-color planet-size'></div>
            <p className='planet-name'>URANUS</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>

        {/* Neptune  */}
        <div className='planets' onClick={() => {setHamburger(true); setNeptune(true)}}>
          <div className='left'>
            <div className='neptune-color planet-size'></div>
            <p className='planet-name'>NEPTUNE</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
          </svg>
        </div>
      </div>

      {/* About Planet  */}
        <div className='about-planet' style={{display: hamburger? 'flex': 'none'}}>
          {/* Header  */}
          <div className='about-planet-header'>
            <div className='overview about-planet-title'>
              <p onClick={() => handleClickOverview()} style={{opacity: overview? '1': '0.5'}}>OVERVIEW</p>
              <hr style={{opacity: overview? '1': '0'}}/>
            </div>
            
            <div className='structure about-planet-title'>
              <p onClick={() => handleClickStructure()} style={{opacity: structure? '1': '0.5'}}>STRUCTURE</p>
              <hr style={{opacity: structure? '1': '0'}}/>
            </div>
          
            <div className='surface about-planet-title'>
              <p onClick={() => handleClickSurface()} style={{opacity: surface? '1': '0.5'}}>SURFACE</p>
              <hr style={{opacity: surface? '1': '0'}}/>
            </div>
          </div>

          {/* Main / Information  */}
          <div className='information'>

          </div>
        </div>


    </div>
  )
}

export default App
