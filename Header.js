import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

      {/* Search */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
       
      </div>

      {/* Nav */}
      <div className="header__nav">
        {/* Sign in */}
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        {/* Returns & Orders */}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        {/* Your Prime */}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* Basket */}
        <div className="header__optionBasket">
         
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
