import React from 'react'
import "./Article.css"
import Art1 from "./images/art1.png"
const Article = () => {
  return (
    <div className='article'>
      <div className='container'>
        <div className='article_container'>
            <div className='article_box1'>
                <img className='article_img1' src={Art1} alt="" />
                <span className='article_span'>
                    <h1 className='article_title1'>Apply AI, Deep Learning and Data Sciece to solve</h1>
                    <p className='article_text1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <button className='header_btn1'>Learn More</button>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Article