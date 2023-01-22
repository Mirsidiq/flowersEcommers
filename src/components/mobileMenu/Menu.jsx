import React from "react";
import "./menu.scss";
import callBtnImage from "../../assets/images/mobile-menu-btn.png";
import viberLogo from "../../assets/images/viber-mobile.svg"
import telegramLogo from "../../assets/images/telegram-mobile.svg"
import instagramLogo from "../../assets/images/instagram-mobile.svg"
import facebookLogo from "../../assets/images/facebook-mobile.svg"
import phoneLogo from "../../assets/images/phone.svg"
import heart from "../../assets/images/heart.svg"
import Button from "../button/Button";
import Country from "../mobileSelectCountry/Country";
import { useState } from "react";
export default function Menu() {
  const [country,setCountry]=useState(false)
  const [countryName,setCountryName]=useState("Kiyev")
  return (
    <div className={'mobile-menu'}>
      <div className="mobile-menu__top">
        <div className="mobile-menu__contact">
          <span className="mobile-menu__tel">+38 (067) 829 30 30</span>
          <a href="tel:998901234567">
            <Button className={"mobile-menu__btn"}>
              Подзвонить
              <div className="mobile-menu__btn__img__wrapper">
                <img
                  className="mobile-menu__btn__img"
                  src={callBtnImage}
                  alt="btn flower img"
                />
              </div>
            </Button>
          </a>
        </div>
        <div className="mobile-menu__socials">
          <div className="mobile-menu__social">
            <img src={viberLogo} alt="viber" />
          </div>
          <div className="mobile-menu__social">
            <img src={instagramLogo} alt="instagram" />
          </div>
          <div className="mobile-menu__social">
            <img src={telegramLogo} alt="telegram" />
          </div>
          <div className="mobile-menu__social">
            <img src={facebookLogo} alt="facebook" />
          </div>
        </div>
      </div>
      <div className="mobile-menu__body">
        <div className="mobile-menu__addres">
          <div className="mobile-menu__addres__inner">
            <span className="mobile-menu__addres__title">{countryName}</span>
            <span className="mobile-menu__addres__select" onClick={()=>setCountry(!country)}>Выбрать город</span>
          </div>
          <div className="mobile-menu__addres__inner">
            <span className="mobile-menu__addres__title">Закладки</span>
            <span className="mobile-menu__addres__select" id="mobile-menu__addres__select">
              <img src={heart} alt="favourites" />
              <span className="mobile-menu__addres__select__count">2</span>
            </span>
          </div>
          <div className="mobile-menu__addres__inner">
            <span className="mobile-menu__addres__title">Личный кабинет</span>
            <span className="mobile-menu__addres__select">Войти</span>
          </div>
          <div className="mobile-menu__more">
              <p className="mobile-menu__more__actions">Форум</p>
              <p className="mobile-menu__more__actions">Отзывы</p>
              <p className="mobile-menu__more__actions">Акции</p>
              <p className="mobile-menu__more__actions">Новости</p>
              <div className="mobile-menu__more__inner">
             <div className="mobile-menu__more__inner__info">
              <span className="mobile-menu__more__title">Информация</span>
              <span className="fa-solid fa-chevron-right"></span>
             </div>
                <div className="mobile-menu__more__inner__box">
                  <p className="mobile-menu__more__inner_text">О нас</p>
                  <p className="mobile-menu__more__inner_text">Оплата и доставка</p>
                  <p className="mobile-menu__more__inner_text">Корпоративным клиентам</p>
                </div>
              </div>
              <div className="mobile-menu__more__actions">
                <img src={phoneLogo} alt="phone logo" className="mobile-menu__more__actions__img" />
                <span>Контакты</span>
              </div>
          </div>
          {
              country ? <Country setCountry={setCountry} country={country} setCountryName={setCountryName}/> : ""
          }
        </div>
      </div>
      <div className="mobile-menu__footer">
          <div className="mobile-menu__social">
            <img src={viberLogo} alt="viber" />
          </div>
          <div className="mobile-menu__social">
            <img src={instagramLogo} alt="instagram" />
          </div>
          <div className="mobile-menu__social">
            <img src={telegramLogo} alt="telegram" />
          </div>
          <div className="mobile-menu__social">
            <img src={facebookLogo} alt="facebook" />
          </div>
        </div>
    </div>
  );
}
