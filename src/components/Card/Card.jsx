import React from 'react';
import styles from './Card.module.scss';
const Card = ({ id, number, removeCard }) => {
  return (
    <div className={styles.wrapper}>
      <img
        onClick={() => removeCard(id)}
        className={styles.delete}
        src="https://image.flaticon.com/icons/png/512/61/61848.png"
        alt="delete"
      />
      {number}
    </div>
  );
};

export default Card;
