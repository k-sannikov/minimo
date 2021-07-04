const fakeText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

const titles = [
  "The perfect weekend getaway ",
  "More than just a music festival ",
  "Life tastes better with coffee",
  "American dream",
  "A day exploring the Alps",
  "Top 10 song for running",
  "Cold winter days",
  "Quis nostrud exercitation",
  "Voluptate velit esse cillum",
  "Excepteur sint occaecat",
  "Beatae tempor incididunt",
];

function importAll(require) {
  return require.keys().map(require).map((element) => {
    return element.default;
  });
}

function arrayRandElement(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

export function getFakeDataCards() {
  let images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  return images.slice(0, 7).map((path, key) => {
    return {
      "key": key,
      "title": titles[key],
      "subtitle": arrayRandElement(["photodiary", "lifestyle"]),
      "text": fakeText,
      "src": path,
    };
  });
}

export function getFakeDataCard(key) {
  let images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  images = images.slice(key, images.length);
  let dataCard = {
    "key": key,
    "title": titles[key],
    "subtitle": arrayRandElement(["photodiary", "lifestyle"]),
    "text": fakeText,
    "src": images.shift(),
    "isRemainder": null,
  };
  let remainder = images.length !== 0;
  dataCard.isRemainder = remainder;
  return dataCard;
}