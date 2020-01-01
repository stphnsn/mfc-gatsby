import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="book-now">
          <ul>
            <li className="book-phone">
              <a href="tel:+441430873510" className="btn">
                Phone for availability
              </a>
            </li>
          </ul>
        </div>

        <nav className="contacts">
          <ul>
            <li>
              <span>Tel: </span>
              <a href="tel:+441430873510">+44 (0)1430 873510</a>
            </li>
            <li>
              <span>Email: </span>
              <a href="mailto:info@manorfarm-cottages.co.uk">info@manorfarm-cottages.co.uk</a>
            </li>
          </ul>
        </nav>

        <nav className="legals">
          <ul>
            <li>
              <a href="/access-statement/" rel="internal">
                Access statement
              </a>
            </li>
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
            <li>
              <a href="/cancellation-policy/" rel="internal">
                Cancellation
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
