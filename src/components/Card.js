export function Card(props) {
  return (
    <div className="card">
      <img src={props.src} />
      <h2 className="card__subtitle subtitle">{props.subtitle}</h2>
      <h1 className="title">{props.title}</h1>
      <p className="text">{props.text.substr(0, 191)}</p>
    </div>
  );
}