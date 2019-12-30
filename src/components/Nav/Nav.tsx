import React from 'react'

const Nav = () => {
  return (
    <nav className="menu" id="menu">
      <ul>
        <li className="nav-home">
          <a href="/" rel="internal">
            Home
          </a>
        </li>
        <li className="nav-the-cottage">
          <a href="/the-cottage/" rel="internal">
            The Cottage
          </a>
        </li>
        <li className="nav-about-the-village">
          <a href="/about-the-village/" rel="internal">
            About the village
          </a>
        </li>
        <li className="nav-things-to-do">
          <a href="/things-to-do/" rel="internal">
            Things to do
          </a>
        </li>
        <li className="nav-getting-here">
          <a href="/getting-here/" rel="internal">
            Getting here
          </a>
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
