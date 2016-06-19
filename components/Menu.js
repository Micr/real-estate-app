import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// TODO: send menu items as props from somewhere else
const Menu = () => (
    <nav id="menu">
      <ul>
        <li className="nav_menu__item"><Link to="/">HOME</Link></li>
        <li className="nav_menu__item"><Link to="/service">Service</Link></li>
        <li className="nav_menu__item"><Link to="/procuct">Product</Link></li>
        <li className="nav_menu__item"><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  )

export default Menu;
