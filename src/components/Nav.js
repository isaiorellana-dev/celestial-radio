import React from "react"
import { Link } from "react-router-dom"
import "@styles/components/Nav.scss"
const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/quienessomos">¿Quienes somos?</Link>
      </li>
      <li>
        <Link to="/credo">¿En que creemos?</Link>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
      {/* <li>
        <Link to="/colaborar">Colaborar</Link>
      </li> */}
    </ul>
  )
}

export default Nav
