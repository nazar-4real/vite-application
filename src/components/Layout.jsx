import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Aside from '../components/aside/Aside';

const Layout = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />

      <div className="wrapper">
        <Aside setActiveLink={setActiveLink} />
        <section className="outlet">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default Layout