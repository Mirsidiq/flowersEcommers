import React from "react";
import "./header.scss";
import heart from "../../assets/images/heart.svg";
import headerLogo from "../../assets/images/header-logo.png";
import bus from "../../assets/images/bus.svg";
import call from "../../assets/images/call.svg";
import user from "../../assets/images/user.svg";
import polygon from "../../assets/images/Polygon.svg";
import searchLogo from "../../assets/images/search.svg";
import viber from "../../assets/images/viber.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";
import facebook from "../../assets/images/facebook.svg";
import heartLogo from "../../assets/images/heart-big.svg";
import miniLogo from "../../assets/images/mobile-logo.png";
import headerBasket from "../../assets/images/basket-desktop.svg"
import basketMini from "../../assets/images/basket.svg"
import toggleLogo from "../../assets/images/toggle.svg"
import Modal from "../modal/Modal";
import { useState } from "react";
import {NavLink} from "react-router-dom"
function Header() {
  const[toggle,setToggle]=useState(false);
  const [searchToggle,setSearchToggle]=useState(false)
  return (
    <header className="header">
      <div className="container header-top__container">
        <ul className="header-top__left">
          <li className="header-top__items">
            <span className="header-top__item__hidden">Валюта</span>
            <select className="header-top__select">
              <option value="0">Грн</option>
              <option value="1">Rubl</option>
              <option value="2">Sum</option>
            </select>
          </li>
          <li className="header-top__items">
          <span className="header-top__item__hidden">Валюта</span>
            <select className="header-top__select">
              <option value="0">Ru</option>
              <option value="1">Uzb</option>
              <option value="2">Eng</option>
            </select>
          </li>
          <li className="header-top__items">
            Город
            <select className="header-top__select">
              <option value="0">Киев</option>
              <option value="1">America</option>
              <option value="2">Tashkent</option>
            </select>
          </li>
          <li className="header-top__items" id="header-top__items__hidden">
            <span className="header-top__heart">
              <img src={heart} alt="heart logo" />
              <span className="header-top__circle">2</span>
            </span>
            Закладки
          </li>
          <li className="header-top__items" id="header-top__items__hidden">
            <a href="#">
              <img src={bus} alt="bus logo" />
              Доставка и оплата
            </a>
          </li>
          <li className="header-top__items">
            <a href="#">
              <img src={call} alt="call logo" />
              Контакты
            </a>
          </li>
        </ul>
        <div className="header-top__right">
          <a href="#" className="header-top__login">
            <img src={user} alt="user logo" width={16} height={16} />
            Вход
          </a>
          <a href="#" className="header-top__register">
            Регистрация
          </a>
        </div>
        <select className="header-top__select header-top__select__hidden">
              <option value="0">Грн</option>
              <option value="1">Rubl</option>
              <option value="2">Sum</option>
            </select>
            <a href="#" className="header-top__deliver__hidden">
              <img src={bus} alt="bus logo" />
              Доставка и оплата
            </a>
        
        <select className="header-top__select header-top__select__hidden">
              <option value="0">Ru</option>
              <option value="1">Uzb</option>
              <option value="2">Eng</option>
        </select>
      </div>
      <div className="container">
        <div className="header-bottom__hidden">
        <a href="#" className="header-bottom__toggle" onClick={()=>setToggle(!toggle)}>
          <img src={toggleLogo} alt="header toggle logo" />
        </a>
        <a href="#" className="header-bottom__logo" >
          <picture>
          <source media="(max-width:780px)" srcSet={miniLogo} />
          <img src={headerLogo} alt="header logo"/>
          </picture>
        </a>
        <div className="header-bottom__hidden__search">
          <img src={searchLogo} alt="search logo" onClick={()=>setSearchToggle(!searchToggle)} />
          <span className="header-bottom__hidden__basket">
            <img src={basketMini} alt="mobile basket" />
            <span className="header-bottom__hidden__basket__count">2</span>
          </span>
        </div>
        </div>
      <div className="header-bottom">
        <a href="#" className="header-bottom__logo" >
          <picture>
          <source media="(max-width:780px)" srcSet={miniLogo} />
          <img src={headerLogo} alt="header logo"/>
          </picture>
        </a>
        <div className="header-bottom__nav__wrapper">
          <form className="header-bottom__form">
            <select className="header-bottom__select">
              <option value="0">Белые розы</option>
              <option value="0">Кремовые розы</option>
              <option value="0">Синие/голубые розы</option>
              <option value="0">Голландские розы</option>
              <option value="0">Красные розы</option>
              <option value="0">Оранжевые розы</option>
              <option value="0">Кустовая роза</option>
            </select>
            <label htmlFor="header-search" className="header-bottom__search">
              <input type="text" id="header-search" className="header-bottom__search__input" placeholder="Поиск по товарам" />
              <img src={searchLogo} alt="search logo" className="header-bottom__search__img"  />
            </label>
          </form>
          <nav className="header-bottom__nav">
            <ul className="header-bottom__list">
              <li className="header-bottom__item">
                <div className="header-bottom__item__texts">
                  <span className="header-bottom__item__txt">Каталог товаров</span>
                  <img src={polygon} alt="arrow down" />
                </div>
                <ul className="header-bottom__item__list">
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Букеты</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Розы</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Цветы в коробке</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Композиции</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Подарки</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Подарочные корзины</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Букеты невесты</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="header-bottom__item__inner">
                    <span className="header-bottom__item__inner__txt">Вкусные букеты</span>
                    <span className="fa-solid fa-chevron-left"></span>
                    <ul className="header-bottom__item__inner__list">
                      <li className="header-bottom__item__inner__content">
                        <NavLink to={"/"} className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке с пироженым Macarons
                        </NavLink>
                      </li>
                      <li className="header-bottom__item__inner__content">
                        <NavLink className="header-bottom__item__inner__link">
                        Цветы в коробке 
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="header-bottom__item">
                 <NavLink to={"/"} className="header-bottom__item__link">Форум</NavLink>
              </li>
              <li className="header-bottom__item">
                 <NavLink to={"/"} className="header-bottom__item__link">Отзывы</NavLink>
              </li>
              <li className="header-bottom__item">
                 <NavLink to={"/"} className="header-bottom__item__link">Акции</NavLink>
              </li>
              <li className="header-bottom__item">
                 <NavLink to={"/"} className="header-bottom__item__link">Новости</NavLink>
              </li>
              <li className="header-bottom__item">
                <div className="header-bottom__item__texts">
                  <span className="header-bottom__item__txt">Информация</span>
                  <img src={polygon} alt="arrow down" />
                </div>
                <ul className="header-bottom__item__list">
                  <li className="header-bottom__item__inner">
                    <NavLink className="header-bottom__item__inner__txt">О нас</NavLink>
                  </li>
                  <li className="header-bottom__item__inner">
                    <NavLink className="header-bottom__item__inner__txt">Оплата и доставка</NavLink>
                  </li>
                  <li className="header-bottom__item__inner">
                    <NavLink className="header-bottom__item__inner__txt">Корпоративным клиентам</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
       <div className="header-bottom__contact">
       <div className="header-bottom__socials">
        <a href="#" className="header-bottom__social">
            <img src={viber} alt="viber logo" />
          </a>
          <a href="#" className="header-bottom__social">
            <img src={instagram} alt="instagram logo" />
          </a>
          <a href="#" className="header-bottom__social">
            <img src={telegram} alt="telegram logo" />
          </a>
          <a href="#" className="header-bottom__social">
            <img src={facebook} alt="facebook logo" />
          </a>
        </div>
        <p className="header-bottom__phone">+38 (067) 829 30 30</p>
        <div className="header-bottom__basket">
          <div className="header-bottom__heart">
            <img src={heartLogo} alt="heart logo" />
            <span className="header-bottom__heart__count">2</span>
          </div>
          <img src={headerBasket} alt="basket logo" className="header-bottom__basket__img" />
          <p className="header-bottom__basket__price">₴ 1 520</p>
        </div>
       </div>
      </div>
      </div>
      <Modal toggle={toggle} setToggle={setToggle} searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>
    </header>
  );
}
export default Header;
