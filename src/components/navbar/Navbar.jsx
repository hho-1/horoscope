import React from 'react'
import logo from '../../helper/logo.png'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left-nav">
            <img src={logo} alt="" />
        </div>
        <div className="right-nav">
            <a href="#">HOROSCOPE</a>
            <a href="#">DAILY</a>
            <a href="#">TAROT</a>
            <a href="#">ARTICLE</a>
            <a href="#">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar





