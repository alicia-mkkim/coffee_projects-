import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CoffeeCard/CoffeeCard.module.scss';

function CoffeeCard({ list }) {
  const navigate = useNavigate();

  return (
    <article className={styles.coffeeContents}>
      <div className={styles.coffeeItem} onClick={() => {navigate(`/detail/${list.id}`)}}>
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
