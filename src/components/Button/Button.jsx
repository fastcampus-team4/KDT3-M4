import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}