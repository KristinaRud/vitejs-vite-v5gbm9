import { children } from 'react';
import logo from '../../assets/logo.svg';
import './Layout.css';

const Layout = ({children}) => {
  return(
    <div className="container">
      <div className="first">
        <div className="nav">
          <a href="#">
            <img src={logo} alt="logo" title="logo" />
          </a>
        </div>
        <div className="menu">
          <div className="title">
            <h1>HI!👋</h1>
            <p>Welcome to MacPaw Bootcamp 2023</p>
          </div>
          <div className="menu-section">
            <p className="menu-title">Lets start using The Cat API</p>
            <div className="menu-list">
              <div className="menu-item">
                <div className="item voting"></div>
                <button className="menu-btn">VOTING</button>
              </div>
              <div className="menu-item">
                <div className="item breeds"></div>
                <button className="menu-btn">BREEDS</button>
              </div>
              <div className="menu-item">
                <div className="item gallery"></div>
                <button className="menu-btn">GALLERY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
