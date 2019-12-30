import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <a href="/" rel="internal">
          <img src="/assets/images/logo.svg" alt="" />
        </a>
        <h1>Manor Farm Cottage</h1>
        <ul>
          <li>
            <a href="#menu" id="showNav">
              Skip to Menu
            </a>
          </li>
          <li>
            <a href="#content">Skip to content</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export { Header }
