import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.inicio}
      </Link>
      <Link to="/sobre-nosotros" className="navigation-links-navlink1">
        {props.nosotros}
      </Link>
      <span className="navigation-links-text">{props.menu}</span>
      <span className="navigation-links-text1">{props.contacto}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  nosotros: 'Sobre nosotros',
  text4: 'Blog',
  rootClassName: '',
  contacto: 'Contacto',
  menu: 'Menú',
  inicio: 'Inicio',
}

NavigationLinks.propTypes = {
  nosotros: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  contacto: PropTypes.string,
  menu: PropTypes.string,
  inicio: PropTypes.string,
}

export default NavigationLinks
