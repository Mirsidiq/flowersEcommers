import React from 'react'
import Menu from "../mobileMenu/Menu"
import "./modal.scss"
export default function Modal({toggle,setToggle}) {
  console.log(toggle);
  return (
    <div className={toggle ? 'header-modal-active' :'header-modal'}>
        <div className="header-modal__top">
            <h3 className='header-modal__title'>Меню</h3>
            <i className="fa-solid fa-xmark header-modal__close" onClick={()=>setToggle(!toggle)}></i>
        </div>
        <div className='header-modal__bottom'>
            <Menu/>
        </div>
    </div>
  )
}
