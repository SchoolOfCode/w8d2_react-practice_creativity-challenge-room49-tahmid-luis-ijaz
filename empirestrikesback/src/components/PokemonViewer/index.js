import { useState, useEffect } from 'react';
import PokemonList from '../PokemonList';

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([])
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(()=>{
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   .then(res =>{return res.json()})
  //   .then(data =>{setPokemon(data)})
  // },[id])
function addPokemon(){

}
  //fetching 1 pokemon form API
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch');
        }
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        // console.log(pokemon)
        setIsPending(false); //spinner
        setError(null); //initial state
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted'); //abort controller
        } else {
          setIsPending(false); //set spinner
          setError(err.message); // set the error
        }
      });
  }, [id]);

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     const data = await response.json();
  //     setPokemon(data);
  //   }
  //   fetchData();
  // }, [id]);

  return pokemon ? (
    <div className="pokemon-viewer">
      <hr />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <h3>{pokemon.weight} Kg</h3>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      ></img>
      <hr />
      <PokemonList data={pokemon.name} />
    </div>
  ) : (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </> //show error or spinner
  );
}

export default PokemonViewer;
