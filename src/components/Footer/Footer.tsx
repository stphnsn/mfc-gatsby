import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <nav className="legals">
          <ul>
            <li>
              <a href="/terms-and-conditions/" rel="internal">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy/" rel="internal">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <p className="copyright">© S.P. Stephenson Ltd 2014. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export { Footer }
