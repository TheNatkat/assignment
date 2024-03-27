// Header.js
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram, IoIosSearch } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'

interface HeaderProps {
  jsonData: any
}

const Header: React.FC<HeaderProps> = ({ jsonData }) => {
  if (!jsonData || !jsonData[0] || !jsonData[0].meta) {
    return null
  }

  return (
    <>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <div className="logo-container">
          <img src={jsonData[0].meta["og:image"]} className="logo-image" />
        </div>

        <div className="navbar-mobile">
          <>
            <img src={jsonData[0].meta["og:image"]} className="logo-image" />
          </>
          <div className="burger">
            <IoIosSearch />
            <RxHamburgerMenu />
          </div>
        </div>
      </Link>
      <div className={`navbar`}>
        <div className="Social-media">
          <FaFacebookF />
          <IoLogoInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>

        <div className="navbar-mid">
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <h6 className="page-selected page-header">Home</h6>
          </Link>
          <h6 className="page-header ">Fashion</h6>
          <h6 className="page-header">Technology</h6>
          <h6 className="page-header">Life Style</h6>
          <h6 className="page-header">Environment</h6>
        </div>

        <div className="search-bar">
          <IoIosSearch />
        </div>
      </div>
    </>
  );
}

export default Header
