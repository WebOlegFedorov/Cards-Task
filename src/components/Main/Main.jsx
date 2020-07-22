import React from 'react';
import styles from './Main.module.scss';
import Card from '../Card/Card';

const Main = ({ cards, removeCard }) => {
  return (
    <main className={styles.main}>
      {cards.length > 0 ? (
        cards.map(({ id, number }) => (
          <Card key={id} number={number} id={id} removeCard={removeCard} />
        ))
      ) : (
        <p>
          Try to <strong>Add a Card</strong>
        </p>
      )}
    </main>
  );
};

export default Main;
