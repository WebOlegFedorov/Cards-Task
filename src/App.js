import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { uuid } from 'uuidv4';

const App = () => {
  const [cards, setCards] = useState([]);
  const [messages, setMessages] = useState([]);

  const addCard = () => {
    const id = uuid();
    const number = Math.floor(Math.random() * 100);
    const card = {
      id,
      number,
    };
    setCards([...cards, card]);
    setMessages([
      {
        isAdded: true,
        number,
      },
      ...messages,
    ]);
  };

  const removeCard = cardId => {
    const number = cards.find(({ id }) => id === cardId).number;

    setCards(cards.filter(({ id }) => id !== cardId));
    setMessages([
      {
        isAdded: false,
        number,
      },
      ...messages,
    ]);
  };

  const sortCards = () => {
    const sorted = [
      ...cards.sort(function (a, b) {
        if (a.number > b.number) {
          return 1;
        }
        if (a.number < b.number) {
          return -1;
        }
        return 0;
      }),
    ];

    setCards(sorted);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Header addCard={addCard} sortCards={sortCards} />
        <Main cards={cards} removeCard={removeCard} />
        <Footer />
      </div>
      <Sidebar messages={messages} />
    </div>
  );
};

export default App;
