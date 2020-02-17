import React, { Component } from 'react';
import Logo from '../assets/facebook-logo.png';
import AccountCircle from '../assets/account-circle.png';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <img src={Logo} alt="" />
        <div className="account-section">
          <span>
            Meu perfil
          </span>
          <img src={AccountCircle} alt="" />
        </div>
      </header>
    )
  }

}

export default Header;