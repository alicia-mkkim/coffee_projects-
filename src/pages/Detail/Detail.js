import React , { useState, useEffect } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import styles from '../Detail/Detail.module.scss';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

function Detail() {
    const params = useParams();
    const [ detail, setDetail ] = useState({
        id: 0,
        name : "",
        engName: "",
        description: "",
        imageURL : "",
        nutritionInfo: [],
        allergy: [],
        review: []
    })

   useEffect(() => {
       fetch(`http://localhost:3000/data/${params.id}.json`, 
       {mehtod: "GET"})

       .then(res => res.json())
       .then(data => {
           setDetail(data);
       })
   },[]);


    return (
        <>
            <div className={styles.container}>
                <TopNav />
            <main>
                <section className={styles.subTitle}>
                    <h2>콜드 브루</h2>
                    <ul>
                        <li>홈 </li>
                        <li>음료 </li>
                        <li>에스프레소 </li>
                        <li>화이트 초콜릿 모카</li>
                    </ul>
                </section>
                <section className={styles.contents}>
                    <article className={styles.imageBox}>
                        <img src={detail.imageURL} alt={detail.name} />
                    </article>
                    <aside className={styles.details}>
                        <div className={styles.coffeeTitle}>
                            <h2>{detail.name}</h2>
                            <p>{detail.engName}</p>
                            <button className={styles.heart}>🤍</button>
                        </div>
                        <div className={styles.description}>
                            {detail.description}
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.productHead}>
                                <h3>제품 영양 정보</h3>
                                <h3>Tall(톨) / 355ml(12 fl oz)</h3>
                            </div>
                            <div className={styles.productContent}>
                                <ul>
                                    {
                                        detail.nutritionInfo.map((info, index) => {
                                            return(
                                                <li key={index}>
                                                    <dl>
                                                        <dt>{info.name}</dt>
                                                        <dd>{info.percent}</dd>
                                                    </dl>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={styles.allergy}>알레르기 유발 요인 : {detail.allergy}</div>
                        </div>
                        <div className={styles.review}> 
                            <span className={styles.reviewTitle}>리뷰</span>
                            <div className={styles.reviewBox}>
                                {
                                    detail.review.map((review, index) => {
                                        return(
                                            <p key={index} ><span className={styles.userId}>{review.userId}</span>{review.comment}</p>

                                        )
                                    })
                                }
                            </div>
                            <section className={styles.reivewInputWrappe}>
                                <input className={styles.reviewInput} type="text" placeholder="리뷰를 입력해주세요!" />
                            </section>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
        <Footer />
    </>
    );
}

export default Detail;