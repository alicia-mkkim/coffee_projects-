import React from 'react';
import TopNav from '../../components/TopNav/TopNav'
import styles from '../Main/Main.module.scss'
function Main() {
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
                    <div className={styles.coffeeItem}>
                        <div className={styles.coffeeImgbox}>
                            <img alt="coffee1" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className={styles.coffeeName}>나이트로 바닐라 크림 ♡</p>
                    </div>
                    {/* <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee"src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className="coffee-name">돌체 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className="coffee-name">바닐라 크림 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                        </div>
                        <p className="coffee-name">벨벳 다크 모카 나이트로 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee5" src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className="coffee-name">시그니처 더 블랙 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className="coffee-name">제주 비자림 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                        </div>
                        <p className="coffee-name">콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee"
                                src="https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  />
                        </div>
                        <p className="coffee-name">콜드 브루 몰트 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1593705058194-103225c2b64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" />
                        </div>
                        <p className="coffee-name">콜드 브루 오트 라떼 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="https://images.unsplash.com/photo-1494314671902-399b18174975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className="coffee-name">나이트로 콜드 브루 ♡</p>
                    </div> */}
                </article>
            </section>
            <section className={styles.coffeeSection1}>
                <div className={styles.titleBox}>
                    <h2>브루드 커피</h2>
                    <span>☕️</span>
                    <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
                </div>
                <div className={styles.coffeeContents}>
                    <div className={styles.coffeeItem}>
                        <div className={styles.coffeeImgbox}>
                            <img alt="coffee1" src="https://images.unsplash.com/photo-1589985902809-39d25db22101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <p className={styles.coffeeName}>아이스 커피 ♡</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
    );
}

export default Main;