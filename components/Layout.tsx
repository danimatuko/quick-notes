import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  return (
    <div className='root'>
        <Navbar />
        <SideMenu />
      <div className='page'>
        {children}
        FOOTER
      </div>
    </div>
  );
};

export default Layout;
