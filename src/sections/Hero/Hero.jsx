import React from 'react'
import "./hero.scss"
import heroLeftSideBg from "../../assets/images/hero-left-bg.png"
import heroRightSideBg from "../../assets/images/hero-right-bg.png"
import heroBigImg from "../../assets/images/hero-big.jpg"
import heroRose from "../../assets/images/hero-rose.jpg"
import heroRosePink from "../../assets/images/hero-pink-rose.jpg"
import heroPresent from "../../assets/images/hero-present.jpg"
import heroSweet from "../../assets/images/hero-sweet.jpg"
export default function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__inner__wrapper">
            <img src={heroBigImg} alt="hero big image" className='hero__inner__img' />
            <p className='hero__inner__big__txt'>Скидки <span className='hero__inner__img__txt-mark'>-6%</span> на все букеты <span className="hero__inner__img__txt-mark">по предзаказу</span >на 8 марта</p>
          </div>
          <div className="hero__inner__wrapper hero__inner__wrapper2">
              <div className="hero__inner__wrapper2__content">
              <img src={heroRose} alt="hero big image" className='hero__inner__img' />
              <p className='hero__inner__img__txt'>Розы</p>
              </div>
              <div className="hero__inner__wrapper2__content">
              <img src={heroPresent} alt="hero big image" className='hero__inner__img' />
              <p className='hero__inner__img__txt'>Подарки</p>
              </div>
              <div className="hero__inner__wrapper2__content">
              <img src={heroSweet} alt="hero big image" className='hero__inner__img' />
              <p className='hero__inner__img__txt'>Подарочные корзины</p>
              </div>
              <div className="hero__inner__wrapper2__content">
              <img src={heroRosePink} alt="hero big image" className='hero__inner__img' />
              <p className='hero__inner__img__txt'>Цветы в коробке</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
