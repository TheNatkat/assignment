// Footer.js
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'

const Footer = ({ }) => {
  return (
    <div className="Footer">
      <div className="footer-heading">Magazine</div>
      <div className="footer-subheading">A Magazine Theme</div>
      <div className="footer-navbar">
        <h6 className="page-selected-footer">
          Home
        </h6>
        <h6>Fashion</h6>
        <h6>Technology</h6>
        <h6>Life Style</h6>
        <h6>Environment</h6>
      </div>
      <div className="footer-social">
        <FaFacebookF />
        <IoLogoInstagram />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
      <h5 className="copyright">
        Copyright © 2023 Magazine - Powered by Rishi Theme
      </h5>
    </div>
  )
}

export default Footer
