function ListItem({ text, handleDelete }) {
  return (
    <li>
      {text} <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default ListItem;
