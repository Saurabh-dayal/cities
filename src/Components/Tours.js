import React from 'react';
import Cards from './Cards';

function Tours({ tours, removeTour }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with Saurabh</h2>
      </div>
      <div className='cards'>
        {tours.map((tour) => {
          return <Cards key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
