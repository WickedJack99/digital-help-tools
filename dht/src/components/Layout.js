import React from 'react';
import '../styles/Layout.css';
import Navbar from './Navbar';


const Layout = ({ content }) => {
  return (
    <div className="layout">
      <Navbar/>
      <div style={{ overflowY: 'auto' }}>
      <div className="layout-content">{content}</div>
      </div>
    </div>
  );
};

export default Layout;