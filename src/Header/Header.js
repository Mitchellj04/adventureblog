import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerReact">React</span>
        <span className="headerBlog">Blog</span>
      </div>
      <img className="headerImg" src="/Images/headerIMG.jpg" alt=""/>
    </div>

  )
}

export default Header