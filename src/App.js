import React, { useState } from 'react';
import './App.css';
import Tours from './Components/Tours';
import Data from './Components/Data';

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length ===0){
    return( 
      <div className='refresh'>
        <h2>No Tools Left</h2>
        <button className='btn-white' onClick={() => setTours(Data)}> Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
