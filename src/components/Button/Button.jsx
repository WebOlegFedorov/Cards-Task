import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text = '', onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      {text}
    </div>
  );
};

export default Button;
