import React from 'react'

import './styles.scss'

const Button = ({ classname, onClick, text, icon }) => {
  return (
    <button className={`button ${classname}`} onClick={onClick}>
      {icon && <i className={`fa fa-${icon}`} />}
      {text}
    </button>
  )
}

export default Button
