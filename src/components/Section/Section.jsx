import React from 'react'
import "./Section.css"

import Se1 from "./images/se1.png"
import Se2 from "./images/se2.png"
import Se3 from "./images/se3.png"
import Se4 from "./images/se4.png"
import Se5 from "./images/se5.png"
import Se6 from "./images/se6.png"
const Section = () => {
  return (
    <div className='section'>
      <div className='containerr'>
        <div className='section_container'>
            <div className='section_box1'>
                <ul className='section_list'>
                <li className='section_item'>
                    <img className='section_img1' src={Se1} alt="" />
                    <h1 className='section_title1'>Naxly as the Winners in Global Agency Awards</h1>
                    <p className='section_text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className='section_item'>
                    <img className='section_img1' src={Se2} alt="" />
                    <h1 className='section_title1'>Expert Prespective Agency Awards</h1>
                    <p className='section_text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className='section_item'>
                    <img className='section_img1' src={Se3} alt="" />
                    <h1 className='section_title1'>Business Prespective Global Agency Awards</h1>
                    <p className='section_text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className='section_item'>
                    <img className='section_img1' src={Se4} alt="" />
                    <h1 className='section_title1'>Value for Results in Global Agency Awards</h1>
                    <p className='section_text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className='section_item'>
                    <img className='section_img1' src={Se5} alt="" />
                    <h1 className='section_title1'>Global Experience in Agency Awards</h1>
                    <p className='section_text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
            </ul>
            </div>
            <div className='section_box2'>
                <span className='section_span'>
                    <h1 className='section_title2'>What our clients say about our awesome solutions</h1>
                    <p className='section_text1'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                    <p className='section_text1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                    <p className='section_text1'>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                    <p className='section_text1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </span>
                <img className='section_img2' src={Se6} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section
