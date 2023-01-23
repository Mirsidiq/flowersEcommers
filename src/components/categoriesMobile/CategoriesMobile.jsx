import React from "react";
import { useState } from "react";
import "./categoriesMobile.scss";
export default function CategoriesMobile() {
  return (
    <ul className="categories-mobile">
      <li className="categories-mobile__item">
        <div className="categories-mobile__item__header">
          <span className="categories-mobile__item__text">Все букеты</span>
          <i className="fa-solid fa-chevron-right categories-mobile__arrow"></i>
        </div>
        <ul className="categories-mobile__item__inner__list">
            <li className="categories-mobile__item__inner__product">Белые розы</li>
            <li className="categories-mobile__item__inner__product">Кремовые розы</li>
            <li className="categories-mobile__item__inner__product">Голландские розы</li>
            <li className="categories-mobile__item__inner__product">Красные розы</li>
        </ul>
      </li>
      <li className="categories-mobile__item">
        <div className="categories-mobile__item__header">
          <span className="categories-mobile__item__text">Все букеты</span>
          <i className="fa-solid fa-chevron-right categories-mobile__arrow"></i>
        </div>
        <ul className="categories-mobile__item__inner__list">
            <li className="categories-mobile__item__inner__product">Белые розы</li>
            <li className="categories-mobile__item__inner__product">Кремовые розы</li>
            <li className="categories-mobile__item__inner__product">Голландские розы</li>
            <li className="categories-mobile__item__inner__product">Красные розы</li>
        </ul>
      </li>
      <li className="categories-mobile__item">
        <div className="categories-mobile__item__header">
          <span className="categories-mobile__item__text">Все букеты</span>
          <i className="fa-solid fa-chevron-right categories-mobile__arrow"></i>
        </div>
        <ul className="categories-mobile__item__inner__list">
            <li className="categories-mobile__item__inner__product">Белые розы</li>
            <li className="categories-mobile__item__inner__product">Кремовые розы</li>
            <li className="categories-mobile__item__inner__product">Голландские розы</li>
            <li className="categories-mobile__item__inner__product">Красные розы</li>
        </ul>
      </li>
      <li className="categories-mobile__item">
        <div className="categories-mobile__item__header">
          <span className="categories-mobile__item__text">Все букеты</span>
          <i className="fa-solid fa-chevron-right categories-mobile__arrow"></i>
        </div>
        <ul className="categories-mobile__item__inner__list">
            <li className="categories-mobile__item__inner__product">Белые розы</li>
            <li className="categories-mobile__item__inner__product">Кремовые розы</li>
            <li className="categories-mobile__item__inner__product">Голландские розы</li>
            <li className="categories-mobile__item__inner__product">Красные розы</li>
        </ul>
      </li>
    </ul>
  );
}
