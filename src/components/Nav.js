import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [toggle, setToggle] = useState(false);

  function handleClick(){
    setToggle(!toggle);
    window.scrollTo(0,0);
  }

  return (
    <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Market Ready Painting
        </a>

        <button
          className={toggle ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="dropdown"
          onClick={() => setToggle(!toggle)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="dropdown" className={ toggle ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/" onClick={handleClick}>Home</Link>
          <Link className="navbar-item" to="/services" onClick={handleClick}>Services</Link>
          <Link className="navbar-item" to="/gallery" onClick={handleClick}>Gallery</Link>
          <Link className="navbar-item" to="/contact" onClick={handleClick}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;