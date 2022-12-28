import React, { Children } from 'react'
import "./button.scss"
export default function Button({children,className}) {
  return (
    <button id='button' className={className ? className:""}>{children}</button>
  )
}
