function ListItem({ name, handleDelete }) {
  return (
    <li>
      {name}{' '}
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          cursor: 'pointer',
          padding: '0 10px',
          borderRadius: '5px',
        }}
        onClick={handleDelete}
      >
        x
      </button>
    </li>
  );
}

export default ListItem;
