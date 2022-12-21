import { NavLink } from 'react-router-dom';

import './aside.css';

const Aside = ({ setActiveLink }) => {
  const linksData = [
    {
      linkName: 'About Us',
      linkUrl: '/about'
    },
    {
      linkName: 'Blog',
      linkUrl: '/blog'
    },
    {
      linkName: 'Experience',
      linkUrl: '/experience'
    },
    {
      linkName: 'Gallery',
      linkUrl: '/gallery'
    },
    {
      linkName: 'Services',
      linkUrl: '/services'
    },
    {
      linkName: 'Contacts',
      linkUrl: '/contacts'
    },
    {
      linkName: 'FAQ',
      linkUrl: '/faq'
    },
  ];

  const links = linksData.map((linkItem, i) => {
    const { linkName: link, linkUrl: url } = linkItem;

    const activeLink = ({ isActive }) => isActive
      ? 'menu__list-link active-link'
      : 'menu__list-link';

    return (
      <li className="menu__list-item" key={i}>
        <NavLink
          className={activeLink}
          to={url}
          onClick={(e) => setActiveLink(e.currentTarget.textContent)}
        >
          {link}
        </NavLink>
      </li>
    )
  });

  return (
    <aside className="aside">
      <nav className="menu">
        <ul className="menu__list">
          {links}
        </ul>
      </nav>
      <p style={{ color: 'var(--white-color)' }}>
        &copy; {new Date().getFullYear()}
      </p>
    </aside>
  )
}

export default Aside