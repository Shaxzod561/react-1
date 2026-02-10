import React from 'react'
import "./Footer.css"
import Fo1 from "./images/fo1.png"
import Fo2 from "./images/fo2.png"
import Fo3 from "./images/fo3.png"
import Fo4 from "./images/fo4.png"
import Fo5 from "./images/fo5.png"
import Fo6 from "./images/fo6.png"
import Fo7 from "./images/fo7.png"
import Fo8 from "./images/fo8.png"
import Fo9 from "./images/fo9.png"
import Fo10 from "./images/fo10.png"
import Fo11 from "./images/fo11.png"
const Footer = () => {
  return (
    
    <div className='footer'>
      <div className='container'>
        <div className='footer_container'>
            <ul className='footer_list'>
                <li className='footer_item'>
                    <a className='footer_link1' href=""><img className='footer_img1' src={Fo1} alt="" />Artificial Intelligence</a>
                    <p className='footer_text1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                    <a className='footer_link2' href=""><p className='footer_text2'><img className='footer_img2' src={Fo2} alt="" />Company@gmail.com.com</p></a>
                    <a className='footer_link2' href=""><p className='footer_text2'><img className='footer_img2' src={Fo3} alt="" />Phone: (064) 332-1233</p></a>
                    <a className='footer_link2' href=""><p className='footer_text2'><img className='footer_img2' src={Fo4} alt="" />450 Wall Street, USA, New York</p></a>
                </li>
                <li className='footer_item'>
                    <h1 className='footer_title1'>INFORMATION</h1>
                    <a className='footer_link3' href="">New Collection</a>
                    <a className='footer_link3' href="">About Store</a>
                    <a className='footer_link3' href="">Contact Us</a>
                    <a className='footer_link3' href="">Latest News</a>
                    <a className='footer_link3' href="">Our Sitemap</a>
                    <a className='footer_link3' href="">Orders History</a>
                </li>
                <li className='footer_item'>
                    <h1 className='footer_title1'>FOOTER MENU</h1>
                    <a className='footer_link3' href="">Instagram profile</a>
                    <a className='footer_link3' href="">New Collection</a>
                    <a className='footer_link3' href="">Contact Us</a>
                    <a className='footer_link3' href="">Latest News</a>
                    <a className='footer_link3' href="">Terms & Conditions</a>
                    <a className='footer_link3' href="">Purchase Theme</a>
                </li>
                <li className='footer_item'>
                    <h1 className='footer_title1'>USEFUL LINKS</h1>
                    <a className='footer_link3' href="">New Collection</a>
                    <a className='footer_link3' href="">New Collection</a>
                    <a className='footer_link3' href="">Contact Us</a>
                    <a className='footer_link3' href="">Latest News</a>
                    <a className='footer_link3' href="">Terms & Conditions</a>
                    <a className='footer_link3' href="">Purchase Theme</a>
                </li>
                <li className='footer_item'>
                    <h1 className='footer_title1'>ABOUT THE STORE</h1>
                    <p className='footer_text1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                    <a className='footer_link4' href="">www.company.com</a>
                    <span className='footer_span'>
                        <a className='footer_link5' href=""><img className='footer_img3' src={Fo5} alt="" /></a>
                        <a className='footer_link5' href=""><img className='footer_img3' src={Fo6} alt="" /></a>
                        <a className='footer_link5' href=""><img className='footer_img3' src={Fo7} alt="" /></a>
                        <a className='footer_link5' href=""><img className='footer_img3' src={Fo8} alt="" /></a>
                        <a className='footer_link5' href=""><img className='footer_img3' src={Fo9} alt="" /></a>
                    </span>
                    <a className='footer_link6' href=""><img className='footer_img4' src={Fo10} alt="" />English <img className='footer_img5' src={Fo11} alt="" /></a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
