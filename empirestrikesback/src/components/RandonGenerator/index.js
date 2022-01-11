import React, { useState } from 'react';
import PokemonViewer from '../PokemonViewer';

function RandomGenerator() {
    const [id, setId] = useState(5);
  
    function handleClick() {
      // ToDO: Set id to be random number between 1 and 151
      setId(Math.floor(Math.random() * 151 + 1));
      // console.log(id)
    }
  
    return (
      <div className="App">
        <button onClick={handleClick}>Get Random Pokemon</button>
        <PokemonViewer id={id} />
      </div>
    );
  }
  
  export default RandomGenerator;