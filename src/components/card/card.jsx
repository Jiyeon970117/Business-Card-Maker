import React, { memo } from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = './images/default_logo.png';

const Card = memo(({name, company, theme, title, email, message, fileURL}) => {
  // const {name, company, theme, title, email, message, fileNaem, fileURL} = card;  //구조분해할당
  const url = fileURL || DEFAULT_IMAGE;

  return(
    <li className={`${styles.card}  ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
});

function getStyles(theme){
  switch(theme){
    case 'dark':
    return styles.dark;
    case 'light':
    return styles.light;
    case 'colorful':
      return styles.colorful;
      default: 
        throw new Error(`unknown theme: ${theme}`);
  }
};

export default Card;
