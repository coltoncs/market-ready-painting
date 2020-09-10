import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <a className="navbar-item">
            Market Ready Painting
                    </a>
        </a>

        <a
          role="button"
          class={toggle ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="dropdown"
          onClick={() => setToggle(!toggle)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="dropdown" className={ toggle ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/services">Services</Link>
          <Link className="navbar-item" to="/gallery">Gallery</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;