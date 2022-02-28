import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Dropdown = () => {
  return (
    <div>
      <ul className={s.menu}>

      {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}

        <li>
          <NavLink to="/">Главный</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Акция</NavLink>
        </li>
       
        <li>
          <NavLink to="/feratures">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Контакты</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Dropdown