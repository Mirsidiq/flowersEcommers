import React from "react";
import "./hero.scss";
import heroActionsTicket from "../../assets/images/hero-actions-photo.png";
import heroActionsPresent from "../../assets/images/hero-actions-gift.png";
import heroActionsVideo from "../../assets/images/hero-actions-video.png";
import heroActionsTicketMobile from "../../assets/images/hero-actions-photo-mobile.png";
import heroActionsPresentMobile from "../../assets/images/hero-actions-gift-mobile.png";
import heroActionsVideoMobile from "../../assets/images/hero-actions-video-mobile.png";
import heroBigImg from "../../assets/images/hero-big.jpg";
import heroRose from "../../assets/images/hero-rose.jpg";
import heroRosePink from "../../assets/images/hero-pink-rose.jpg";
import heroPresent from "../../assets/images/hero-present.jpg";
import heroSweet from "../../assets/images/hero-sweet.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__inner__wrapper">
            <img
              src={heroBigImg}
              alt="hero big image"
              className="hero__inner__img"
            />
            <p className="hero__inner__big__txt">
              Скидки <span className="hero__inner__img__txt-mark">-6%</span> на
              все букеты{" "}
              <span className="hero__inner__img__txt-mark">по предзаказу</span>
              на 8 марта
            </p>
          </div>
          <div className="hero__inner__wrapper hero__inner__wrapper2">
            <div className="hero__inner__wrapper2__content">
              <img
                src={heroRose}
                alt="hero big image"
                className="hero__inner__img"
              />
              <p className="hero__inner__img__txt">Розы</p>
            </div>
            <div className="hero__inner__wrapper2__content">
              <img
                src={heroPresent}
                alt="hero big image"
                className="hero__inner__img"
              />
              <p className="hero__inner__img__txt">Подарки</p>
            </div>
            <div className="hero__inner__wrapper2__content">
              <img
                src={heroSweet}
                alt="hero big image"
                className="hero__inner__img"
              />
              <p className="hero__inner__img__txt">Подарочные корзины</p>
            </div>
            <div className="hero__inner__wrapper2__content">
              <img
                src={heroRosePink}
                alt="hero big image"
                className="hero__inner__img"
              />
              <p className="hero__inner__img__txt">Цветы в коробке</p>
            </div>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom__card hero__bottom__card__left">
            <div className="hero__bottom__card__info">
              <h4 className="hero__bottom__card__title">
                Фото доставок наших букетов
              </h4>
              <p className="hero__bottom__card__txt">
                Безупречное качество обслуживания и доставка в любую точку
                города
              </p>
            </div>
            <img
              src={heroActionsTicket}
              alt="ticket"
              className="hero__bottom__card__img"
            />
          </div>
          <div className="hero__bottom__card hero__bottom__card__centered">
            <div className="hero__bottom__card__info">
              <h4 className="hero__bottom__card__title">
                Видео отчеты клиентов
              </h4>
              <p className="hero__bottom__card__txt">
                Наши счастливые клиенты с букетами от Flowers-Ukraine
              </p>
            </div>
            <img
              src={heroActionsVideo}
              alt="ticket"
              className="hero__bottom__card__img"
            />
          </div>
          <div className="hero__bottom__card hero__bottom__card__right">
            <div className="hero__bottom__card__info">
              <h4 className="hero__bottom__card__title">
                Подарок каждому клиенту
              </h4>
              <p className="hero__bottom__card__txt">
                К каждому заказу мы прилогаем комплимент от компании в виде
                маленького презента
              </p>
            </div>
            <img
              src={heroActionsPresent}
              alt="ticket"
              className="hero__bottom__card__img"
            />
          </div>
        </div>
        <div className="hero__bottom__hidden">
          <div className="hero__bottom__hidden__info">
            <figure className="hero__bottom__hidden__img">
              <img src={heroActionsTicketMobile} alt="ticket mobile" />
            </figure>
            <h5 className="hero__bottom__hidden__title">Фото доставок </h5>
          </div>
          <div className="hero__bottom__hidden__info">
            <figure className="hero__bottom__hidden__img">
              <img src={heroActionsVideoMobile} alt="video mobile" />
            </figure>
            <h5 className="hero__bottom__hidden__title">Видео отчеты </h5>
          </div>
          <div className="hero__bottom__hidden__info">
            <figure className="hero__bottom__hidden__img">
              <img src={heroActionsPresentMobile} alt="present mobile" />
            </figure>
            <h5 className="hero__bottom__hidden__title">Подарок клиентам</h5>
          </div>
        </div>
      </div>
      <div className="hero__aside-bg hero__left-bg"></div>
      <div className="hero__aside-bg hero__right-bg"></div>
    </section>
  );
}
