import './Header.css'
import React, { useState, useEffect } from 'react';
import logo1 from '../img/header__img1.png'
import logo2 from '../img/header__img2.png'
import logo3 from '../img/header__img3.png'
import night from '../img/night-mode.png'


function Header() {
    const [theme, setTheme] = useState('light');
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);
    return (

<div className={`Header ${theme}`}>
    
    <div className="header__name">Drile</div>
    <div className="header__list">
        <div className="header__list__item">Home</div>
        <div className="header__list__item">Shop</div>
        <div className="header__list__item">Product</div>
        <div className="header__list__item">Blog</div>
        <div className="header__list__item">Page</div>
        <div className="header__list__item">Contact</div>
    </div>
    <div className="header__imgs">
        <img className="header__imgs__img header__imgs__img__night" onClick={toggleTheme} src={night} alt="" />
        <img className="header__imgs__img" src={logo1} alt="" />
        <img className="header__imgs__img" src={logo2} alt="" />
        <img className="header__imgs__img" src={logo3} alt="" />
    </div>
    <div className='header__menu'>
        <div className='header__menu__row'></div>
        <div className='header__menu__row'></div>
        <div className='header__menu__row'></div>
    </div>
    
</div> 
    )


        
  

   
}

export default Header;