import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'

import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <span className="header-logo">
        <Link to="/">90s Shop</Link>
      </span>
      <Nav />
    </header>
  )
}

export default Header
