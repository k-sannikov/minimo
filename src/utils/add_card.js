import { getFakeDataCard } from "./fake_data";

export function addCard(cardsData, setCardsData, setIsCardsRemainder) {
  let stateCards = cardsData.slice();
  let key = stateCards[stateCards.length - 1].key;
  for (let index = 0; index < 2; index++) {
    key++;
    let temp = getFakeDataCard(key);
    setIsCardsRemainder(temp.isRemainder ? true : false);
    stateCards.push({
      "key": key,
      "title": temp.title,
      "subtitle": temp.subtitle,
      "text": temp.text,
      "src": temp.src,
    });
  }
  setCardsData(stateCards);
}