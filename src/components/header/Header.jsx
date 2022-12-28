import React from "react";
import "./header.scss";
import heart from "../../assets/images/heart.svg";
import bus from "../../assets/images/bus.svg";
import call from "../../assets/images/call.svg";
import user from "../../assets/images/user.svg";
import Modal from "../modal/Modal";
import { useState } from "react";
function Header() {
  const[toggle,setToggle]=useState(false);
  return (
    <header className="header-top">
      <div className="container header-top__container">
        <ul className="header-top__left">
          <li className="header-top__items">
            Валюта
            <select className="header-top__select">
              <option value="0">Грн</option>
              <option value="1">Rubl</option>
              <option value="2">Sum</option>
            </select>
          </li>
          <li className="header-top__items">
            Язык
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
          <li className="header-top__items">
            <span className="header-top__heart">
              <img src={heart} alt="heart logo" />
              <span className="header-top__circle">2</span>
            </span>
            Закладки
          </li>
          <li className="header-top__items">
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
      </div>
      <Modal toggle={toggle} setToggle={setToggle}/>
    </header>
  );
}
export default Header;
