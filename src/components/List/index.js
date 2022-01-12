import ListItem from '../ListItem';

function List({ pokemonList, handleDelete }) {
  return (
    <ul style={{listStyle: 'none'}}>
      {pokemonList.map((pokemon, i) => (
        <ListItem key={i} name={pokemon} handleDelete={() => handleDelete(i)} />
      ))}
    </ul>
  );
}

export default List;
