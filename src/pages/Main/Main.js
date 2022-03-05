import React from 'react';
import TopNav from '../../components/TopNav/TopNav'
import styles from '../Main/Main.module.scss'
import CoffeeCard from './CoffeeCard/CoffeeCard';
import { useState, useEffect } from 'react';

function Main() {

    const [ coffeeList, setCoffeeList ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data/brewList.json', {
          method: 'GET',
        })
          .then(res => res.json())
          .then(data => {
            setCoffeeList(data);
          });
      }, []);

    return (
        <div className={styles.container}>
            <TopNav />
        <main>
            <section className={styles.coffeSection}>
                <article className={styles.titleBox}>
                    <h2>콜드 브루 커피</h2>
                    <span>☕️</span>
                    <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
                </article>
                <article className={styles.coffeeContents}>
                {
                    coffeeList.slice(0,10).map((list, index) => <CoffeeCard key={list.id} list={list}/>)
                }
                </article> 
            </section>
            <section className={styles.coffeeSection}>
                <article className={styles.titleBox}>
                    <h2>브루드 커피</h2>
                    <span>☕️</span>
                    <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
                </article>
                <article className={styles.coffeeContents}>
                {
                    coffeeList.slice(10,12).map((list, index) => <CoffeeCard key={list.id} list={list}/>)
                }
                </article>
            </section>
        </main>
    </div>
    );
}

export default Main;