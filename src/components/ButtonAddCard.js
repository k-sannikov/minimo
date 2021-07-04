export function ButtonAddCard(props) {
  if (props.value) {
    return <button className="buttonAddCard" onClick={props.addCard}>Load more</button>;
  }
  return null;
}