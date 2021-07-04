import "../css/style.css";

import { getFakeDataCards } from "../utils/fake_data";
import { addCard } from "../utils/add_card";

import { Navbar } from "./Navbar";
import { PrimaryArticle } from "./PrimaryArticle";
import { Cards } from "./Cards";
import { ButtonAddCard } from "./ButtonAddCard";
import { FootherLink } from "./FootherLink";

import { useState } from "react";

export default function App() {
  const [cardsData, setCardsData] = useState(getFakeDataCards());
  const [isCardsRemainder, setIsCardsRemainder] = useState(true);
  return (
    <>
      <main className="main">
        <Navbar />
        <PrimaryArticle value={cardsData[0]} />
        <section className="cards">
          <Cards value={cardsData.slice(1, 5)} />
        </section>
      </main>
      <section className="banner">
        <div className="banner__main">
          <h2 className="banner__title">Sign up for our newsletter!</h2>
          <div className="banner__form">
            <input className="banner__input" type="email" placeholder="Enter a valid email address" />
            <button className="banner__button" ></button>
          </div>
        </div>
      </section>
      <main className="main">
        <section className="cards">
          <Cards value={cardsData.slice(5)} />
        </section>
        <ButtonAddCard
          value={isCardsRemainder}
          addCard={() => addCard(cardsData, (cardData) => setCardsData(cardData), setIsCardsRemainder)}
        />
      </main>
      <section className="foother">
        <div className="foother__panel">
          <div className="foother__left-side">
            <FootherLink value="Terms and conditions" href="#" />
            <FootherLink value="Privacy" href="#" />
          </div>
          <div className="foother__right-side">
            <p className="foother__right-side_title">Follow</p>
            <a className="foother__social-link facebook-ico" href="#"></a>
            <a className="foother__social-link twitter-ico" href="#"></a>
            <a className="foother__social-link instagram-ico" href="#"></a>
          </div>
        </div>
      </section>
    </>
  );
}