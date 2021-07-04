export function PrimaryArticle(props) {
  return (
    <>
      <img src={props.value.src} />
      <section className="primary-article">
        <h2 className="subtitle">{props.value.subtitle}</h2>
        <h1 className="title">{props.value.title}</h1>
        <p className="text">{props.value.text}</p>
        <h2 className="subtitle">leave a comment</h2>
      </section>
    </>
  )
}