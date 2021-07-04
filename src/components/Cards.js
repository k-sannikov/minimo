import { Card } from "./Card";

export function Cards(props) {
  const cards = props.value.map((cardData, index) => (
    <Card
      title={cardData.title}
      subtitle={cardData.subtitle}
      text={cardData.text}
      src={cardData.src}
      key={index}
    />
  ));
  return cards;
}