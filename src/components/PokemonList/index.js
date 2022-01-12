import { useState } from 'react';

import List from '../List';

function App({ data }) {
  const [pokemons, setPokemons] = useState([data]);

  function handleDelete(i) {
    setPokemons([...pokemons.slice(0, i), ...pokemons.slice(i + 1)]);
  }

  function addPokemon(name) {
    setPokemons([...pokemons, name]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addPokemon(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            cursor: 'pointer',
            padding: '5px',
            borderRadius: '10px',
          }}
        >
          Add to my Team
        </button>
      </form>
      <h1>My Pokemon Team</h1>

      <List  pokemonList={pokemons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
