import React from 'react'
import './Footer.scss';
import logo from '../assets/logo1.jpg'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-brand">
        <img src={logo} alt="" />
        <h2>TootieCutie<span>Bow</span></h2>
        </div>

        
        <div className="lists">

          <div className="list">
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>


          <div className="list">
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>



          <div className="list">
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>


        </div>
        <div className="social-media">
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>
      </footer>
    </div>
  )
}

export default Footer
