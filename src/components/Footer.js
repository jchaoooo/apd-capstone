import React, {Component} from 'react';
import './../styles/Footer.css';
import {FaLinkedinIn, FaFacebookF, FaInstagram} from 'react-icons/fa';

class Footer extends Component {
  render () {
    return (
        <section className="footer">
          <div className="footer-wrapper">
            <img src={require("./../images/vco-logo.png")} alt="vco-logo" className="vco-logo" />
            <p>VISIT VCOFFICES.COM FOR OTHER SERVICES</p>
            <div className="connect">
              <a href="https://www.linkedin.com/company-beta/109468/?pathWildcard=109468"><FaLinkedinIn className="icon-contact"></FaLinkedinIn></a>
              <a href="https://www.facebook.com/VCOffices/"><FaFacebookF className="icon-contact"></FaFacebookF></a>
              <a href="https://www.instagram.com/vcoffices/"><FaInstagram className="icon-contact"></FaInstagram></a>
            </div>
            <div className="legal">
              <a href="/projects">Terms of Use</a>
              <a href="/projects">Privacy</a>
              <a href="/projects">Locations</a>
            </div>
            <div className="copyright">
              <p>&#169; VANGARD CONCEPT OFFICES 2018</p>
              <p>All Rights Reserved.  A Preferred Teknion Dealer.</p>
            </div>
          </div>
        </section>
    )
  }
}

export default Footer;
