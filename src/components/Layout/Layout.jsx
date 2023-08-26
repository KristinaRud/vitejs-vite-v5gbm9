import logo from '../../assets/logo.svg';
import Navbar from '../Navbar/Navbar';
import Wrapper from '../Wrapper/Wrapper';
import './Layout.css';

// eslint-disable-next-line react/prop-types
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
            <Navbar/>
          </div>
        </div>
      </div>
      <Wrapper className="wrapper">
        {children}
      </Wrapper>      
    </div>
  );
};

export default Layout;
