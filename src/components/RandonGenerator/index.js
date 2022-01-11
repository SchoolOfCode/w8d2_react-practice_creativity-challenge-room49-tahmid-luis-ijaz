import React, { useState } from 'react';
import PokemonViewer from '../PokemonViewer';

function RandomGenerator() {
  const [id, setId] = useState(5);

  function handleClick() {
    setId(Math.floor(Math.random() * 151 + 1));
  }

  return (
    <div className="App">
      <h1>Build your Pokemon Team</h1>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          cursor: 'pointer',
          padding: '5px',
          borderRadius: '10px',
        }}
        onClick={handleClick}
      >
        Get Random Pokemon
      </button>
      <PokemonViewer id={id} />
    </div>
  );
}

export default RandomGenerator;
