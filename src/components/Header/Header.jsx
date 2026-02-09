import React from 'react';
import "./Header.css";
import Logo from "./imges/logo.png";

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header_container'>
            <a className='header_link1' href="#"><img className='header_img' src={Logo} alt="" />Artificial Intelligence</a>
            <ul className='header_list'>
                <li className='header_item'><a className='header_link2' href="">Home</a></li>
                <li className='header_item'><a className='header_link2' href="">About</a></li>
                <li className='header_item'><a className='header_link2' href="">Services</a></li>
                <li className='header_item'><a className='header_link2' href="">Blog</a></li>
                <li className='header_item'><a className='header_link2' href="">Contact</a></li>
            </ul>
            <button className='header_btn1'>Sign in</button>
             <div className='burger'>
                <span className='spanbur1'></span>
                <span className='spanbur2'></span>
                <span className='spanbur3'></span>
           </div> 
        </div>
      </div>
    </div>
  )
}

export default Header
