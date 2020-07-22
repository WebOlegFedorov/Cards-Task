import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = ({ addCard, sortCards }) => {
  return (
    <header className={styles.header}>
      <Button onClick={addCard} text="Add Card" />
      <Button onClick={sortCards} text="Sort Cards" />
    </header>
  );
};

export default Header;
