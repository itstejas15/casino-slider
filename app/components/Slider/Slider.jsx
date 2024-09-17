'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import Link from 'next/link';

const Slider = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 2.5rem' }}>
        <h1 className={styles.title}>CASINO</h1>
        <Link href="/games" className={styles.seeAll}>
          SEE ALL GAMES
          <span style={{ color: '#edc200' }}> &#10142; </span>
        </Link>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
          600: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 20 },
          1281: { slidesPerView: 5, slidesPerGroup: 3, spaceBetween: 20 },
          1600: { slidesPerView: 6, slidesPerGroup: 3, spaceBetween: 25 }
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <img src={card.image} alt={card.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <img src={card.icon} alt="icon" className={styles.cardIcon} />
              <span className={styles.cardName}>{card.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <a href="/games" className={styles.seeAll}>SEE ALL GAMES</a> */}
    </div>
  );
};

export default Slider;
