import React from "react";
import CategoriesMobile from "../categoriesMobile/CategoriesMobile";
import Menu from "../mobileMenu/Menu";
import "./modal.scss";
export default function Modal({
  toggle,
  setToggle,
  searchToggle,
  setSearchToggle,
}) {
  return (
    <div
      className={
        toggle || searchToggle ? "header-modal-active" : "header-modal"
      }
    >
      <div className="header-modal__top">
        <h3 className="header-modal__title">
          {searchToggle ? "Категории" : "Меню"}
        </h3>
        <i
          className="fa-solid fa-xmark header-modal__close"
          onClick={() => {
            setToggle(false);
            setSearchToggle(false);
          }}
        ></i>
      </div>
      <div className="header-modal__bottom">
        {searchToggle ? <CategoriesMobile /> : <Menu />}
      </div>
    </div>
  );
}
