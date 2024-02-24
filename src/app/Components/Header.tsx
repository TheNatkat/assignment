// Header.js
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram, IoIosSearch } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
interface HeaderProps {
  
  jsonData: any,
}

const Header: React.FC<HeaderProps> = ({ jsonData }) => {
  return (
    <>
      <div className="logo-container">
        <img src={jsonData[0].meta['og:image']} className="logo-image" />
      </div>
      <div className="navbar-mobile">
        <>
          <img src={jsonData[0].meta['og:image']} className="logo-image" />
        </>
        <div className="burger">
          <IoIosSearch />
          <RxHamburgerMenu />
        </div>
      </div>
      <div className={`navbar`}>
        <div className="Social-media">
          <FaFacebookF />
          <IoLogoInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>

        <div className="navbar-mid">
          <h6 className="page-selected" >
            Home
          </h6>
          <h6>Fashion</h6>
          <h6>Technology</h6>
          <h6>Life Style</h6>
          <h6>Environment</h6>
        </div>

        <div className="search-bar">
          <IoIosSearch />
        </div>
      </div>
    </>
  )
}

export default Header
