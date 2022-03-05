import React from 'react';
import styles from '../CoffeeCard/CoffeeCard.module.scss';
import { useState, useEffect } from 'react';

function CoffeeCard({ list }) {
    console.log(list);
  return (
    <article className={styles.coffeeContents}>
      <div className={styles.coffeeItem}>
        <div className={styles.coffeeImgbox}>
          <img
            alt={list.name}
            src={list.imageURL}
          />
        </div>
        <p className={styles.coffeeName}>{list.name} ♡</p>
      </div>
    </article>
  );
}

export default CoffeeCard;
