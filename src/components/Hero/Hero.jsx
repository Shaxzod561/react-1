import React from 'react'
import "./Hero.css"
import Her1 from "./images/her1.png"
import Her2 from "./images/her2.png"
import Her3 from "./images/her3.png"
import Her4 from "./images/her4.png"
import Her5 from "./images/her5.png"
import Her6 from "./images/her6.png"
const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero_container'>
            <div className='hero_box1'>
                <span className='hero_spa1'>
                    <p className='hero_text1'>Next genaretion platform</p>
                    <h1 className='hero_title1'>Artificial intelligence & Syber security</h1>
                    <p className='hero_text2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className='hero_bt'>
                        <button className='header_btn1'>Get Started</button>
                        <button className='header_btn1'><img className='hero_img1' src={Her1} alt="" /> Watch Video</button>
                    </div>
                </span>
                <img className='hero_img2' src={Her2} alt="" />
            </div>
            <div className='hero_box2'>
                <img className='hero_img3' src={Her3} alt="" />
                <img className='hero_img3' src={Her4} alt="" />
                <img className='hero_img3' src={Her5} alt="" />
                <img className='hero_img3' src={Her6} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
