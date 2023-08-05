import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className="page-header">
      <div className="page-title"> <span className="title">Photex</span> </div>

      <nav className="page-navigation">
        <ul className="nav-list-container">
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contacts</li>
            <li className="nav-list-item">PBank</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
