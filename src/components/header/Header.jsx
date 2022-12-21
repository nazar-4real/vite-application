import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ activeLink, setActiveLink }) => (
  <header className="header">
    <Link
      className="header-link"
      to='/'
      onClick={() => setActiveLink(null)}
    >
      Homepage
    </Link>
    <b>{activeLink}</b>
    <div className="social">
      <a className="social__link" href="facebook.com">
        Facebook
      </a>
      <a className="social__link" href="instagram.com">
        Instagram
      </a>
    </div>
  </header>
)

export default Header